import {
    IPADDRESS_CHANGE
} from '../actions/types';



const INITIAL_STATE = {
    ipAddress: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case IPADDRESS_CHANGE:
            return {...state, ipAddress: action.payload};
        default:
            return state;
    };
}