import React, { createContext, useEffect, useState } from 'react'
import DataList from './DataList';
import userService from '../Services/UserServices';

export const BodyContext = createContext();
const Home = () => {
  const [data,setData] = useState([]);

  const getData = async() =>{
 
    try{
    const res = await userService.getUser();
    const resData = await res.json();
    setData(resData);
    }
    catch(error){
         console.log("error is user api ",error);
         
    }
  }
  
 useEffect(()=>{
  getData();
},[]);

  return (
   <BodyContext.Provider value = {{ data }}>
    <DataList />
   </BodyContext.Provider>
    
  )
}

export default Home;