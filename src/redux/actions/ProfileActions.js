import {
  PROFILE_START,
  PROFILE_SUCCESS,
  PROFILE_FAILED,

  PROFILE_EDIT_START,
  PROFILE_EDIT_SUCCESS,
  PROFILE_EDIT_FAILED,
} from './types';

import * as RootNavigation from '../../RootNavigation';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { Alert } from 'react-native'

export const getProfile = (uid) => {
  return(dispatch) => {
    console.log('uid', uid)
    dispatch({ type: PROFILE_START })
    firestore()
    .collection('Users')
    .doc(uid)
    .get().then((user) => {
      const userParams = {
        ...user._data,
        uid
      }
      console.log('user params: ',userParams)
      dispatch({ type: PROFILE_SUCCESS, payload: userParams })
    }).catch((err) => {
      dispatch({ type: PROFILE_FAILED })
    })

  }
}

export const editProfile = (params) => {
  console.log('edit gelen: ', params)
  return (dispatch) => {
    dispatch({type:PROFILE_EDIT_START});
    if (params.profilepicture){
      const reference = storage().ref(`/users/${params.uid}`);
      reference.putFile(params.profilepicture).then(() => {
        reference.getDownloadURL().then((imageURL) => {
          console.log('img url: ', imageURL);
          firestore()
            .collection('Users')
            .doc(params.uid)
            .update(
              {
                profilePic: imageURL,
                bio: params.bio,
                gender: params.cinsiyet,
                tel: params.tel,
                name: params.name,
                username: params.username,
              }
            )
            .then(() => {
              dispatch({ type: PROFILE_EDIT_SUCCESS })
              RootNavigation.pop()
            }).catch(error => {
              console.log('Hata Resim Yükleme: ', error);
            })
        })
      })
    } else {
      firestore()
      .collection('Users')
      .doc(params.uid)
      .update(
        {
          bio: params.bio,
          gender: params.cinsiyet,
          tel: params.tel,
          name: params.name,
          username: params.username,
        }
      )
      .then(() => {
        console.log('profile edited!');
        dispatch({ type: PROFILE_EDIT_SUCCESS})
        RootNavigation.pop()
      })
      .catch(() => {
        dispatch({ type: PROFILE_EDIT_FAILED })
        console.log('profile not edited!');
      })
    }
  }
}
