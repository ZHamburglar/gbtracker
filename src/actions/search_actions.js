import axios from 'axios';
import qs from 'qs';


import {
    SEARCH_CHANGE,
    SEARCH_SUBMIT,
    SEARCH_INITIATE,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from './types';

const GB_ROOT_URL ='https://api.sandbox.gunbroker.com/v1/items?';
const GB_QUERY_PARAMS = {
    keyword: 'glock'
}

const buildGBQueryUrl = (text) => {
    return 'https://cors-anywhere.herokuapp.com/https://api.sandbox.gunbroker.com/v1/items?keywords=glock'
}



export const searchChange = (text) => {
    console.log("text", text)
    return {
        type: SEARCH_CHANGE,
        payload: text
    }
}

export const searchSubmit = (text, callback) => async (dispatch) => {
    try {
        console.log("submitting a search for: ", text)
        dispatch({type: SEARCH_INITIATE})
        const url = buildGBQueryUrl(text)
        let { data } = await axios.get(url, {
            headers: { 'X-DevKey' : '8a7c660a-d5e1-4cf8-b932-ef67fb716faf',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'}
        })
        console.log("data", data)
        

        callback();
    } catch(e){
        return {
            type: SEARCH_FAILURE
        }
    }
    

}