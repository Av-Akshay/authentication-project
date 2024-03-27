import { useState } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slice";
import { useDispatch } from "react-redux";


const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const { handleSubmit, register,reset } = useForm();

    const loginForm = async (data) => {
        try {
          const response = await axios.post(
            "http://192.168.0.130/questions/api/Auth/Login",
            data
          );
          if (response.data.isSuccess) {
            alert(`${response.data?.message}`);
            localStorage.setItem("token", JSON.stringify(response?.data?.data));
            dispatch(login(response?.data?.data))
            console.log(response);
            navigate("/");
          } else if (!response.data?.isSuccess) {
            setError(response.data?.message);
            reset()
          }
        } catch (error) {
          console.log(error);
        }
      };

  return {
    handleSubmit,
    register,
    loginForm,
    error,
    navigate
  }
}

export default useLogin