import {
    SEARCH_CHANGE,
    SEARCH_SUBMIT,
    SEARCH_INITIATE
} from '../actions/types';


const INITIAL_STATE = {
    searchItem: '',
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SEARCH_CHANGE:
            console.log('This is changed to: ', action.payload)
            return {...state, searchItem: action.payload}
        case SEARCH_SUBMIT:
            console.log("Search submitted: ", action.payload)
            return {...state, searchItem:''}
        default:
            return state;
    };
}