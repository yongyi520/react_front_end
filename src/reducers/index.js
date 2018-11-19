import { combineReducers } from 'redux';
import { FETCH_COMPANIES } from '../actions/types';

export function companiesReducer(state = [], action) {
    switch (action.type) {
    case FETCH_COMPANIES:
        return action.companies;
    default:
        return state;
    }
}

export default combineReducers({
    companies: companiesReducer
});