import { combineReducers } from 'redux'; 
import { reducer } from './events/eventReducer';


export const eventReducer = combineReducers({
    events: reducer
})