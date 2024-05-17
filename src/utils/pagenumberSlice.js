import { createSlice } from "@reduxjs/toolkit";

const page=createSlice({
    name:"page1",
    initialState:{
       page:1,
    
    },
    reducers:{
        pageChange:(state,action)=>{
            state.page=action.payload;
        },
        pageNextIcons: (state) => {
            state.page += 1;
        }

    }
})


export default page.reducer

export const{pageChange,pageNextIcons}=page.actions