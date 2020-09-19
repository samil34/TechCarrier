import {
  PROFILE_START,
  PROFILE_SUCCESS,
  PROFILE_FAILED,

  PROFILE_EDIT_START,
  PROFILE_EDIT_SUCCESS,
  PROFILE_EDIT_FAILED,
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  profile: null
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {

    case PROFILE_START:
    case PROFILE_EDIT_START:
      return {
        ...state,
        loading:true,
      }

    case PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload
      };

    case PROFILE_EDIT_SUCCESS:
    case PROFILE_EDIT_FAILED:
    case PROFILE_FAILED:
      return {
        ...state,
        loading:false,
      }

    default:
      return state;
  }
}
