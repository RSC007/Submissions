import { combineReducers } from 'redux'; 
import { reducer } from './Customer/customerReducer';


export const customerReducer = combineReducers({
    customer: reducer
})