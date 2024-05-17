import { createSlice } from "@reduxjs/toolkit";

const paginationSlice =createSlice({

    name:"pagination",
    initialState:{
      
    },
    reducers:{
        AddData:(state,action)=>
        {
            state.data =action.payload;
        }
    }
})



export default paginationSlice.reducer;

export const {AddData}=paginationSlice.actions;