import {
    TRACK_ITEM
} from './types';

export const addItemTrack = (data) => {
    console.log("this is being added: ", data)
    return {
        type: TRACK_ITEM,
        payload: data
    }
}