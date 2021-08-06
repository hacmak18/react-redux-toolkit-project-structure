import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../module/counter/redux/counterSlice';

export const rootReducer = combineReducers({
    counter: counterReducer
})