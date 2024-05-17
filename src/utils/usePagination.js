
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AddData } from "./paginationSlice";
export const usePagination=()=>{

    const dispatch = useDispatch();


    const fetchPosts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts?skip=5&limit=100");
        const data = await response.json();

        console.log(data.posts)
        dispatch(AddData(data ));

      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }; 
  
    useEffect(() => {
      
  
    
        fetchPosts();
      
    }, []);






}


