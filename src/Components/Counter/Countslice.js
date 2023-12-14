import { createSlice } from '@reduxjs/toolkit';
const inival = {value : 10}
export const Countslice = createSlice({
    name : "counter",
    initialState : inival,
    reducers:{
    increment:(state)=>{
        state.value = state.value+1;
    },
    decrement:(state)=>{
        state.value = state.value-1;
    }
    }
})

export const {increment , decrement} = Countslice.actions;
export default Countslice.reducer;
