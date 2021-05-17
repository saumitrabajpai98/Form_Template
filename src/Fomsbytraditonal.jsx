import React, { useState } from 'react';
import './App.css';
 const Formsbytraditonal=()=>{
   const [data,setData]=useState(""); //Hook for 1st input
   const [dataTwo,setDataTwo]=useState(""); //Hook for 2nd input
   const [finalData,setfinalData]=useState(""); //Hook for displaying final data
   const inputEventOne=(event)=>{
     setData(event.target.value);    //onChange function for 1st input
    };
    const inputEventTwo=(event)=>{
      setDataTwo(event.target.value); //onChange function for 2nd input
    }
  const savefinalData= (event)=>{
    event.preventDefault();
    setfinalData(data+" "+dataTwo); //savefinalData function for onSubmit event for final input
  } ; 
return (
  <>
  <form onSubmit={savefinalData}>
  <div>
    <h1>Hello {finalData}</h1>
    <input type="text" placeholder="Enter ur First Name" onChange={inputEventOne} value={data}/>

    <input type="text" placeholder="Enter ur Last Name" onChange={inputEventTwo} value={dataTwo}/>
    <br/>
    <button type="submit">Submit</button>
  </div>
  </form>
  </>
)
 };