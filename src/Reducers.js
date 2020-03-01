import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ContactReducer from './reducers/ContactReducers'

export default combineReducers({
    routing: routerReducer,
    ...ContactReducer
});

