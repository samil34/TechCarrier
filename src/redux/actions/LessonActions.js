import {
    LESSON_START,
    LESSON_SUCCESS,
    LESSON_FAILED,

    ADD_LESSON_START,
    ADD_LESSON_SUCCESS,
    ADD_LESSON_FAILED,
  } from './types';


export const getLessons = () => {
  return (dispatch) => {
    dispatch({type:LESSON_START});
    firestore()
      .collection('Lessons')
      // .orderBy('createdDate', 'desc')
      .onSnapshot(lessons => {
        console.log('posts data:', lessons);
        let data = [];
        posts.forEach((doc) => {
          data.push(doc.data())
        })
        console.log('data: ', data);
        dispatch({ type: LESSON_SUCCESS, payload: data });
      })
  }
}

export const addLesson = (params) => {
  return (dispatch) => {
    firestore()
    .collection('Lessons')
    .add(params)
    .then((data) => {
      console.log('Lesson added!', data);
      dispatch({ type: ADD_LESSON_SUCCESS, payload: params })
      RootNavigation.pop()
    }).catch(() => {
      dispatch({ type: ADD_LESSON_FAILED })
      console.log('Lesson not add!');
    })
  }
}
