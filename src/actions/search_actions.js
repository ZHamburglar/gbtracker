import axios from 'axios';
import qs from 'qs';

import {
    SEARCH_CHANGE,
    SEARCH_INITIATE,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from './types';

// This will build the query that goes to the API, ROOT_URL is appended with corresponding QUERY_PARAMS

const GB_ROOT_URL ='https://cors-anywhere.herokuapp.com/https://api.sandbox.gunbroker.com/v1/items?NoReserveItems=true&HasPictures=true&PageSize=300&';
const GB_QUERY_PARAMS = {
    // keywords: 'glock',
    BuyNowOnly: 'true'
}

//
// Working now, refactor to pull from the reducer state to function correctly.
//

const buildGBQueryUrl = (text) => {
    // This builds the query to the API using the Query Params
    const query = qs.stringify({ ...GB_QUERY_PARAMS, keywords: text })
    return `${GB_ROOT_URL}${query}`
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
        dispatch({type:SEARCH_SUCCESS, payload: data})
        callback();
    } catch(e){
        return {
            type: SEARCH_FAILURE,
            payload: e
        }
    }
    

}