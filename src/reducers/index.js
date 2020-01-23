import {combineReducers} from 'redux';
import {reducer as form } from 'redux-form';
import commentReducer from 'reducers/comment';
import authReducer from 'reducers/auth';

export default combineReducers({
    comments: commentReducer,
    auth: authReducer,
    form: form
});