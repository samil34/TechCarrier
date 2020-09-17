import {
    LIST_START,
    LIST_SUCCESS,
    LIST_FAILED,

    ADD_START,
    ADD_SUCCESS,
    ADD_FAILED,
  } from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  list : [],
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {

    case ADD_START:
    case LIST_START:
      return {
        ...state,
        loading:true,
      }

    case LIST_SUCCESS:
      return {
        ...state,
        loading:false,
        list : action.payload
      };

    case ADD_SUCCESS:
    case ADD_FAILED:
    case LIST_FAILED:
      return {
        ...state,
        loading:false,
      }

    case LIST_SUCCESS:
      return {
        ...state,
        loading:false,
        list : action.payload
      };

    default:
      return state;
  }
}
