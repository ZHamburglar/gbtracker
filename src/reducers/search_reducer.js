import {
    SEARCH_CHANGE,
    SEARCH_SUBMIT,
    SEARCH_INITIATE,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from '../actions/types';


const INITIAL_STATE = {
    searchItem: '',
    loading: false,
    gList: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SEARCH_CHANGE:
            console.log('This is changed to: ', action.payload)
            return {...state, searchItem: action.payload};
        case SEARCH_SUBMIT:
            console.log("Search submitted: ", action.payload)
            return {...state, searchItem:''};
        case SEARCH_INITIATE:
            console.log("Search Initiated: ")
            return {...state, loading: true};
        case SEARCH_FAILURE:
            return {...state, loading: false};
        case SEARCH_SUCCESS:
            return {...state, loading: false};
        default:
            return state;
    };
}