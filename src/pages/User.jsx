import axios from 'axios';
import React, { useEffect, useState } from 'react'

const user = () => {
    const [userData, setUserData]= useState({});
    const [errorMessage, setErrorMessage]= useState("");

    useEffect(()=>{
       const localValue = JSON.parse( localStorage.getItem("token"));
       const getUser = async ()=>{
        setErrorMessage(" ");
        try {
            const response = await axios.get(`http://192.168.0.130/questions/api/Auth/GetUser?userId=${localValue.userId}`,{
                headers:{
                    Accept:"text/plain",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localValue.token}`
                }
            })
           if(response?.data?.isSuccess){
               setUserData(response?.data?.data)
           }else{
            setErrorMessage(response.data.message)
           }
        } catch (error) {
            console.log(error.message);
        }
       }
       getUser();
       
    },[])

  return (
    <div className="w-full h-[92vh] flex items-center justify-center flex-col gap-5 bg-[rgba(225,225,225,0.8)]">
      <h1 className='text-center text-5xl text-red-500 font-bold'>{errorMessage}</h1>
    <div className="w-4/5 flex items-center justify-center h-3/5 bg-white rounded-xl relative gap-10">
      <div className='w-1/4'>
         <figcaption>
            <img className='rounded-3xl' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/profile-design-template-4c23db68ba79c4186fbd258aa06f48b3_screen.jpg?ts=1581063859" alt="" />
         </figcaption>
      </div>
      <div className='flex flex-col items-center justify-center gap-2 px-10'>
          <p> <b> id:- </b> {userData.userId} </p>
          <p className='capitalize'> <b>Name:- </b> { userData.nickName}</p>
          <p><b>email id:- </b> {userData.emailID} </p>
          <p><b>Phone Number:- </b> {userData.phoneNumber} </p>
      </div>
    </div>
  </div>
  )
}

export default user