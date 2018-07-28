import {
    TRACK_ITEM,
    STOP_TRACK_ITEM,
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/types';

const INITIAL_STATE = {
    trackingList: [],
    showModal: true,
    removalItem: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TRACK_ITEM:
            console.log("Includes: ", state.trackingList.length)
            var i = state.trackingList.length
            while (i--) {
                if (state.trackingList[i].itemID === action.payload.itemID){
                    // If there is a matching itemID then don't add it to the trackingList
                    return {
                        ...state
                    }
                }
            }
            // Add to the trackingList if there isn't a matching itemID
            return { 
                ...state,
                trackingList: [...state.trackingList, action.payload]
            };
        case STOP_TRACK_ITEM:
            const newTrackingList = state.trackingList.filter(item => item !== action.payload)
            // console.log('this is the new: ', newTrackingList)
            return { ...state, showModal: false, trackingList: newTrackingList}
        case OPEN_MODAL:
            console.log("OPEN MODAL", action.payload)
            return { ...state, showModal: true, removalItem: action.payload};
        case CLOSE_MODAL:
            console.log("CLOSE MODAL")
            return {...state, showModal: false};
        default:
            return state;
    };
}