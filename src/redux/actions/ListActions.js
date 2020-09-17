import {
    LIST_START,
    LIST_SUCCESS,
    LIST_FAILED,

    ADD_START,
    ADD_SUCCESS,
    ADD_FAILED,
  } from './types';

import firestore from '@react-native-firebase/firestore';
import * as RootNavigation from '../../RootNavigation';
import { Alert } from 'react-native'

export const getList = () => {
  return (dispatch) => {
    dispatch({type:LIST_START});
    firestore()
      .collection('Posts')
      // .orderBy('createdDate', 'desc')
      .onSnapshot(posts => {
        console.log('posts data:', posts);
        let data = [];
        posts.forEach((doc) => {
          data.push(doc.data())
        })
        console.log('data: ', data);
        dispatch({ type: LIST_SUCCESS, payload: data });
      })
  }
}

export const addPost = (params) => {
  return (dispatch) => {
    firestore()
    .collection('Posts')
    .add(params)
    .then((data) => {
      console.log('Post added!', data);
      dispatch({ type: ADD_SUCCESS, payload: params })
      RootNavigation.pop()
    }).catch(() => {
      dispatch({ type: ADD_FAILED })
      console.log('Post not add!');
    })
  }
}
