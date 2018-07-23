import {
    TRACK_ITEM
} from '../actions/types';

const INITIAL_STATE = {
    trackingList: []
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
        default:
            return state;
    };
}