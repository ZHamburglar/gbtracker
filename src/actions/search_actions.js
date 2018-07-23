import axios from 'axios';
import qs from 'qs';

import {
    SEARCH_CHANGE,
    SEARCH_SUBMIT,
    SEARCH_INITIATE,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from './types';

const GB_ROOT_URL ='https://api.sandbox.gunbroker.com/v1/items?'




export const searchChange = (text) => {
    console.log("text", text)
    return {
        type: SEARCH_CHANGE,
        payload: text
    }
}

export const searchSubmit = (text) => async (dispatch) => {
    try {
        console.log("submitting a search for: ", text)
        dispatch({type: SEARCH_INITIATE})
    } catch(e){
        return {
            type: SEARCH_FAILURE
        }
    }
    

}