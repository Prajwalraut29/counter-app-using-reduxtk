 import  { configureStore } from '@reduxjs/toolkit';
import increment  from './Components/Counter/Countslice';
import decrement  from './Components/Counter/Countslice';
 export const store = configureStore({
    reducer:{
        state : increment,
        state : decrement
    }
 })
