import {
    SEARCH_CHANGE
} from '../actions/types';


const INITIAL_STATE = {
    searchItem: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SEARCH_CHANGE:
            console.log('This is changed to: ', action.payload)
            return {...state}
        default:
            return state;
    };
}