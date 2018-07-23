import {
    TRACK_ITEM
} from '../actions/types';

const INITIAL_STATE = {
    trackingList: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TRACK_ITEM:
            console.log('This is changed to: ', action.payload)
            return { 
                ...state,
                trackingList: [...state.trackingList, action.payload]
            };
        default:
            return state;
    };
}