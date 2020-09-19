import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,

    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILED,

    SIGN_OUT_SUCCESS

} from './types';

import * as RootNavigation from '../../RootNavigation';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { Alert } from 'react-native'

export const login = (params) => {
  return (dispatch) => {
    if (params.email != '' && params.password != ''){
      if (validateEmail(params.email)) {
        dispatch({type:LOGIN_START})
        auth()
          .signInWithEmailAndPassword(params.email, params.password)
          .then((data) => {
            const uid = data.user._user.uid;

            firestore()
              .collection('Users')
              .doc(uid)
              .get()
              .then((user) => {
                const userParams = {
                  ...user._data,
                  uid
                }
                dispatch({ type: LOGIN_SUCCESS, payload: userParams})
              }).catch((err) => {
                dispatch({ type: LOGIN_FAILED })
              })
          }).catch(error => {
            if (error.code === 'auth/invalid-email') {
            } else if (error.code === 'auth/user-not-found') {
              Alert.alert('Uyarı', 'Böyle bir kullanıcı bulunamadı!')
            }
            dispatch({ type: LOGIN_FAILED })
          })
        } else {
          Alert.alert('UYARI', 'Lütfen geçerli bir email yazınız!')
        }
      } else {
        Alert.alert('UYARI', 'Lütfen bütün alanları doldurunuz!')
      }

  }
}

export const register = (params) => {
  return (dispatch) => {
    if (params.email != '' && params.password != '' && params.firstname != '' && params.lastname != '') {
      if (validateEmail(params.email)) {
        auth()
          .createUserWithEmailAndPassword(params.email, params.password)
          .then((data) => {
            const uid = data.user._user.uid;
            const setData = {
              name: params.name,
              username: params.username,
              email: params.email,
              saved:[],
              badges:[],
              profilePic:null,
              tel:null,
              gender:null,
              bio:'',
              profilePic: imageURL,
            }
            firestore()
              .collection('Users')
              .doc(uid)
              .set(setData)
              .then(() => {
                RootNavigation.pop()
              }).catch(() => {
              })
          }).catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            }
          });
        } else {
          Alert.alert('UYARI', 'Lütfen geçerli bir email yazınız!')
        }
      } else {
        Alert.alert('UYARI', 'Lütfen bütün alanları doldurunuz!')
      }
    }
}

export const isUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGIN_START })
    auth().onAuthStateChanged((data) => {
      if(data) {
        const uid = data._user.uid;
        getUser(uid, dispatch)
      } else {
        dispatch({ type: LOGIN_FAILED })
      }
    });
  }
}

const getUser = (uid, dispatch) => {
  firestore()
    .collection('Users')
    .doc(uid)
    .get().then((user) => {
      const userParams = {
        ...user._data,
        uid
      }
      console.log('user params: ',userParams)
      dispatch({ type: LOGIN_SUCCESS, payload: userParams })
    }).catch((err) => {
      dispatch({ type: LOGIN_FAILED })
    })
}

export const signOut = () => {
  return (dispatch) => {
    auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGN_OUT_SUCCESS })
      });
  }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
