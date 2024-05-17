import logo from './logo.svg';
import './App.css';

import { usePagination } from './utils/usePagination';
import { useSelector } from 'react-redux';
import Card from './components/Card';
import { useState } from 'react';
import Pagination from './components/Pagination';

function App() {
  // Using useSelector to get data from Redux store
  const[page,setpage]=useState(2)
  const firstDataItem = useSelector((state) => {
    // Accessing data from the state
    const jsonDataApiPagination = state?.pagination?.data?.posts;
    // Returning the first item if available, otherwise null
    return jsonDataApiPagination && jsonDataApiPagination.length > 0 ? jsonDataApiPagination : null;
  });


  const pageValue=useSelector((state)=>state.page1.page)

  // Logging the first data item
  console.log(firstDataItem);

  // Logging usePagination() result
  console.log(usePagination());

  return (
    <div className="App ">

      {
        firstDataItem &&firstDataItem.slice(pageValue*10-10,pageValue*10).map((item)=>{
          return(
            <Card  title={item.title}/>
          )
        })
      }




    </div>
  );
}

export default App;
