import {
    TRACK_ITEM,
    STOP_TRACK_ITEM,
    OPEN_MODAL,
    CLOSE_MODAL
} from './types';

export const addItemTrack = (data) => {
    console.log("this is being added: ", data)
    return {
        type: TRACK_ITEM,
        payload: data
    }
}

export const removeItemTrack = (data) => {
    console.log('this item is being removed: ', data)
    return {
        type: STOP_TRACK_ITEM,
        payload: data
    }
}

export const openRemovalModal = (data) => {
    console.log('Row info: ', data)
    return {
        type: OPEN_MODAL,
        payload: data
    }
}

export const closeRemovalModal = () => {
    return {
        type: CLOSE_MODAL
    }
}