import {
    LIST_START,
    LIST_SUCCESS,
    LIST_FAILED,
    ADD_START,
    ADD_SUCCESS,
    ADD_FAILED,
  } from '../actions/types';

const INITIAL_STATE = {
    list : []
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        
        case LIST_SUCCESS:

        return {
                ...state,
                list : action.payload
            };

        case ADD_SUCCESS:
            
            const newItem = action.payload

            console.log('YENI: /n', newItem)

            return {
                ...state,
                list : [...state.list, newItem]
            };

        default:
            return state;
    }
}