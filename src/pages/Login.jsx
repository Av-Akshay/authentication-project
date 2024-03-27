import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../components";
import useLogin from "../hook/useLogin";

const Login = () => {
  const { handleSubmit, register, loginForm, error, navigate } = useLogin();

  return (
    <div className="h-[92vh] flex items-center justify-center">
      <div className=" flex flex-col items-center gap-5 w-4/5">
        <div className="text-center">
          {error ? (
            <h1 className="font-bold text-3xl text-red-500">{error} </h1>
          ) : (
            <h1 className="font-bold text-3xl"> Login ! </h1>
          )}
        </div>
        <div className="w-3/5">
          <form
            className="flex flex-col justify-center gap-8"
            onSubmit={handleSubmit(loginForm)}
          >
            <Input
              className="border border-black "
              label={"Email"}
              type={"email"}
              placeholder="Enter your e-mail"
              {...register("email", {
                required: true,
              })}
            />
            <Input
              className="border border-black "
              label={"Password"}
              type={"password"}
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <div className=" flex justify-between items-center">
              <Button
                type="submit"
                className="bg-green-400 max-w-fit hover:border-green-500 hover:text-green-500 border-2 box-border shadow-xl"
              >
                Login
              </Button>
              <Link
                type="button"
                className="text-blue-500 text-xl font-medium"
                onClick={() => {
                  navigate("/forget");
                }}
              >
                forget password
              </Link>
            </div>
            <div>
              <Button
                type={"button"}
                className="bg-blue-500 w-full text-white hover:border-blue-500 hover:text-blue-500 border-2"
                onClick={() => { 
                  navigate("/changepassword");
                }}
              >
                Change Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
