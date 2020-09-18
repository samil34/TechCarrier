import {
    COURSE_START,
    COURSE_SUCCESS,
    COURSE_FAILED,

    ADD_COURSE_START,
    ADD_COURSE_SUCCESS,
    ADD_COURSE_FAILED,
  } from './types';

export const getCourses = () => {
  return (dispatch) => {
    dispatch({type:COURSE_START});
    firestore()
      .collection('Courses')
      // .orderBy('createdDate', 'desc')
      .onSnapshot(courses => {
        console.log('courses data:', courses);
        let data = [];
        posts.forEach((doc) => {
          data.push(doc.data())
        })
        console.log('data: ', data);
        dispatch({ type: COURSE_SUCCESS, payload: data });
      })
  }
}

export const addCourse = (params) => {
  return (dispatch) => {
    firestore()
    .collection('Courses')
    .add(params)
    .then((data) => {
      console.log('Course added!', data);
      dispatch({ type: ADD_COURSE_SUCCESS, payload: params })
      RootNavigation.pop()
    }).catch(() => {
      dispatch({ type: ADD_COURSE_FAILED })
      console.log('Course not add!');
    })
  }
}
