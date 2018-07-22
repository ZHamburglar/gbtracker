import {
    SEARCH_CHANGE
} from './types';

export const searchChange = (text) => {
    return {
        type: SEARCH_CHANGE,
        payload: text
    }
}