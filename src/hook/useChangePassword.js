import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const useChangePassword = () => {
  const [message, setMessage] = useState("");
  const [authData, setAuthData] = useState("");

  const { handleSubmit, register,watch, formState: { errors },reset} = useForm();

  const changePassword = async (data) => {
    setMessage("");

    try {
      const response = await axios.post(
        `http://192.168.0.130/questions/api/Auth/ChangePassword`,
        data,
        {
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json",
            Authorization: `Bearer ${authData?.token}`,
          },
        }
      );
      if (response?.data?.isSuccess) {
        setMessage(response?.data?.message);
        reset();
      } else if (!response?.data?.isSuccess) {
        alert(response?.data?.message);
        reset();
      }
    } catch (error) {
      console.log(`change password form error!! ${error.message}`);
    }
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    setAuthData(user);
  }, []);

  const minUppercasePattern = /[A-Z]+/;
  const minLowercasePattern = /[a-z]+/;
  const minNumberPattern = /[0-9]+/;
  const minSpecialCharPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  return {
    handleSubmit,
    changePassword,
    message,
    register,
    minLowercasePattern,
    minUppercasePattern,
    minNumberPattern,
    minSpecialCharPattern,
    watch,
    errors
  };
};

export default useChangePassword;
