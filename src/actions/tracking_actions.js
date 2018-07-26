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

export const openRemovalModal = () => {
    return {
        type: OPEN_MODAL
    }
}

export const closeRemovalModal = () => {
    return {
        type: CLOSE_MODAL
    }
}