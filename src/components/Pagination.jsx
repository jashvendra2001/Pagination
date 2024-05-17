import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageChange } from '../utils/pagenumberSlice';
import { pageNextIcons } from "../utils/pagenumberSlice";
const Pagination = () => {
    const page = useRef();
 const dispatch=useDispatch();
 const dispatch12=useDispatch();


    const APIDATA = useSelector((state) => state?.pagination?.data?.posts);
    console.log(APIDATA);

    const handlePage = (pageNumber) => {
        console.log(pageNumber);
        
        dispatch(pageChange(pageNumber))
        // Handle pagination logic here, e.g., dispatch an action to fetch data for the selected page
    };


    const handlePageNext=()=>{
          

                
                dispatch12(pageNextIcons( ))
               
           

      

    }

    return (
        <div style={{ textAlign: "center" }}>
            {APIDATA && APIDATA.length > 0 && (
                <div style={{ cursor: "pointer" }}>
                    <span onClick={() => handlePage('previous')}>◀️</span>
                    {Array(Math.ceil(APIDATA.length / 10)).fill().map((_, index) => (
                        <span style={{ cursor: "pointer",padding:"30px",border:"2px solid black" }} key={index} ref={page} onClick={() => handlePage(index + 1)}>{index + 1}</span>
                    ))}
                    <span onClick={handlePageNext}>▶️</span>
                </div>
            )}
        </div>
    );
};

export default Pagination;
