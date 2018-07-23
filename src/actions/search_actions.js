import {
    SEARCH_CHANGE,
    SEARCH_SUBMIT,
    SEARCH_INITIATE,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from './types';



export const searchChange = (text) => {
    console.log("text", text)
    return {
        type: SEARCH_CHANGE,
        payload: text
    }
}

export const searchSubmit = (text) => async (dispatch) => {
    console.log("submitting a search for: ", text)
    dispatch({type: SEARCH_INITIATE})

}