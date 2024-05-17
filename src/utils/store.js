
import { configureStore } from '@reduxjs/toolkit';
import paginationSlice from './paginationSlice';
import page from "../utils/pagenumberSlice"
export const store = configureStore({
    reducer:{
        pagination:paginationSlice,
        page1:page
    }

})