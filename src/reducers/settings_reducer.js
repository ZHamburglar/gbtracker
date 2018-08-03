import {
    ZIPCODE_CHANGE
} from '../actions/types';



const INITIAL_STATE = {
    zipCode: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ZIPCODE_CHANGE:
            return {...state};
        default:
            return state;
    };
}