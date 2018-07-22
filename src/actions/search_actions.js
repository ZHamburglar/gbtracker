import {
    SEARCH_CHANGE,
    SEARCH_SUBMIT
} from './types';
const mtg = require('mtgsdk')



export const searchChange = (text) => {
    console.log("text", text)
    return {
        type: SEARCH_CHANGE,
        payload: text
    }
}

export const searchSubmit = (text) => {
    console.log("submitting a search for: ", text)
    mtg.card.where({name: text})
        .then(results => {
            console.log(results)
        })
        
    return (dispatch) => {
        console.log("now submitting to API")
        dispatch({ 
            type: SEARCH_SUBMIT,
            payload: text
        })
    }
}