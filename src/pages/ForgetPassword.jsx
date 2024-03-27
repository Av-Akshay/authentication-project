import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "../components";
import axios from "axios";

const ForgetPassword = () => {
  const { handleSubmit, register } = useForm();
  const [message, setMessage] = useState("");
  const forgotPass = async (data) => {
    setMessage("");
    try {
      const responce = await axios.get(
        `http://192.168.0.130/questions/api/Auth/ForgotPassword?email=${data.email}`
      );
      if (responce?.data?.isSuccess) {
        setMessage(responce?.data?.message);
      } else if (!responce?.data?.isSuccess) {
        alert(responce?.data?.message);
      }
    } catch (error) {
      console.log(`error in forgot password form!!  ${error.message}`);
    }
  };
  return (
    <div className="h-[92vh] flex items-center justify-center flex-col gap-2">
      <h1 className=" text-center font-bold text-2xl text-green-500 transition-all">
        {message}
      </h1>
      <div className="w-11/12 flex items-center ">
        <div className="w-1/2">
          <figcaption>
            <img
              src="https://img.freepik.com/premium-vector/security-password-concept-illustration_251005-470.jpg"
              alt="forgot password logo"
            />
          </figcaption>
        </div>
        <div className="w-1/2 p-2">
          <form
            className="flex items-center justify-center w-full"
            onSubmit={handleSubmit(forgotPass)}
          >
            <div className="flex flex-col gap-5 w-full">
              <h1 className=" text-6xl text-slate-900">
                Forgot
                <br />
                Password
              </h1>
              <p className="font-medium">
                Please enter your email adress below...
              </p>
              <Input
                // label={"please enter your email adress below"}
                className="border-b-2 border-green-400 shadow-md shadow-green-200"
                type={"email"}
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                })}
              />
              <div className="w-full flex justify-end items-center">
                <Button
                  className={
                    "w-fit border-2 hover:border-green-500 bg-green-500 transition-all hover:text-green-500"
                  }
                  type={"submit"}
                >
                  Next
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
