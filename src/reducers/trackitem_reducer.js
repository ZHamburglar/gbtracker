import {
    TRACK_ITEM
} from './types';

const INITIAL_STATE = {
    trackingList: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TRACK_ITEM:
            console.log('This is changed to: ', action.payload)
            return {...state};
        default:
            return state;
    };
}