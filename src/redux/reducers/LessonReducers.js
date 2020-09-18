import {
  LESSON_START,
  LESSON_SUCCESS,
  LESSON_FAILED,

  ADD_LESSON_START,
  ADD_LESSON_SUCCESS,
  ADD_LESSON_FAILED,
  } from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  list : [],
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {

    case LESSON_START:
    case ADD_LESSON_START:
      return {
        ...state,
        loading:true,
      }

    case LESSON_SUCCESS:
      return {
        ...state,
        loading:false,
        list : action.payload
      };

    case ADD_LESSON_SUCCESS:
    case ADD_LESSON_FAILED:
    case LESSON_FAILED:
      return {
        ...state,
        loading:false,
      }

    default:
      return state;
  }
}
