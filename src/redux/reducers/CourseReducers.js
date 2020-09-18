import {
  COURSE_START,
  COURSE_SUCCESS,
  COURSE_FAILED,

  ADD_COURSE_START,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_FAILED,
  } from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  list : [],
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {

    case ADD_COURSE_START:
    case COURSE_START:
      return {
        ...state,
        loading:true,
      }

    case COURSE_SUCCESS:
      return {
        ...state,
        loading:false,
        list : action.payload
      };

    case ADD_COURSE_SUCCESS:
    case ADD_COURSE_FAILED:
    case COURSE_FAILED:
      return {
        ...state,
        loading:false,
      }

    default:
      return state;
  }
}
