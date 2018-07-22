import {
    SEARCH_CHANGE
} from './types';

export const searchChange = (text) => {
    console.log("text", text)

    return {
        type: SEARCH_CHANGE,
        payload: text
    }
}