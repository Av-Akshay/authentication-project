import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const useResetPassword = () => {
  const [message, setMessage] = useState("");
  const [expireTokenMessage, setExpireTokenMessage] = useState("");
  const { handleSubmit, register,watch, formState: { errors },reset } = useForm();
  const param = useParams();

  const resetPass = async (data) => {
    setMessage(" ");
    try {
      const response = await axios.post(
        `http://192.168.0.130/questions/api/Auth/ResetPassword`,
        { ...param, ...data }
      );
      if (response?.data?.isSuccess) {
        setMessage(response?.data?.message);
        reset()
      } else if (!response?.data?.isSuccess) {
        alert(response?.data?.message);
        reset()
      }
    } catch (error) {
      console.log(error);
      reset()
    }
  };

  const minUppercasePattern = /[A-Z]+/;
  const minLowercasePattern = /[a-z]+/;
  const minNumberPattern = /[0-9]+/;
  const minSpecialCharPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  useEffect(()=>{
   let isTokenExpire = async ()=>{
    try {
      const response = await axios.get(`http://192.168.0.130/questions/api/Auth/IsResetPasswordExpired?token=${param.resetToken}`);
      console.log(response?.data?.isSuccess);
      if(response?.data?.isSuccess){
           setExpireTokenMessage("");
      }else{
          setExpireTokenMessage(response?.data?.message)
      }
    } catch (error) {
      console.log(`isTokenExpire function error message ${error.message}`);
    }
   }
   isTokenExpire();
  },[]);

  const toggle= ()=>{
    console.log("clicked");
    setExpireTokenMessage("")
  }

  return {
    param,
    handleSubmit,
    register,
    resetPass,
    message,
    minLowercasePattern,
    minUppercasePattern,
    minNumberPattern,
    minSpecialCharPattern,
    watch,
    errors,
    expireTokenMessage,
    toggle
  };
};

export default useResetPassword;
