import {
    LIST_START,
    LIST_SUCCESS,
    LIST_FAILED,
    ADD_START,
    ADD_SUCCESS,
    ADD_FAILED,
  } from './types';

import data from '../../data.json';

export const getList = () => {
    return {
        type: LIST_SUCCESS,
        payload : data
    }
}


export const addItem = (props) => {
    return {
        type: ADD_SUCCESS,
        payload : props
    }
}
