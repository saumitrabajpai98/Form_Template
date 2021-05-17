import React, { useState } from 'react';
import './App.css';
 const App= () => {
   const [fullName, setFullName] = useState({ //destucturing of array
     fname:'',
     lname:'',
     email:'',
     num:'',
   });

   const inputEvent=(events)=>{
    const value=events.target.value;
    const inputName=events.target.name;
    setFullName((obj)=>{
      if(inputName==='firstName')
      {
        return{
          fname:value,
          lname:obj.lname,
          email:obj.email,
          num:obj.num,
        };
      }
      else if(inputName==='lastName')
      {
        return{
          fname:obj.fname,
          lname:value,
          email:obj.email,
          num:obj.num,
        };
      }
      else if(inputName==='eMails')
      {
        return{
          fname:obj.fname,
          lname:obj.lname,
          email:value,
          num:obj.num,
        };
      }
      else if(inputName==='phoneNumber')
      {
        return{
          fname:obj.fname,
          lname:obj.lname,
          email:obj.email,
          num:value,
        };
      }
    })
   };
   const onSubmits=(event)=>{
    event.preventDefault();
    alert("Form Submitted!");
   };
  return (
  <>
  <form onSubmit={onSubmits}>
  <div>
    <h1>Hello, {fullName.fname} {fullName.lname}</h1>
    <br/>
    <p>{fullName.email}</p>
    <br/>
    <p>{fullName.num}</p>
    <input type="text" placeholder="Enter ur First Name" onChange={inputEvent} value={fullName.fname} name="firstName" autoComplete='off'/> 

    <input type="text" placeholder="Enter ur Last Name" onChange={inputEvent} value={fullName.lname} name="lastName" autoComplete='off'/>

    <input type="email" placeholder="Enter ur eMail" onChange={inputEvent} value={fullName.email} name="eMails" autoComplete='off'/>

    <input type="number" placeholder="Enter ur Phone Number" onChange={inputEvent} value={fullName.num} name="phoneNumber" autoComplete='off'/>
    <br/>
    <button type="submit">Submit</button>
  </div>
  </form>
  </>
)
 };
 export default App;