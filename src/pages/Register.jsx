import React from "react";
import { Button, Input } from "../components/index";

import useRegister from "../hook/useRegister";
import { data } from "autoprefixer";

const Register = () => {
  const {
    handleSubmit,
    register,
    submitForm,
    message,
    minLowercasePattern,
    minNumberPattern,
    minSpecialCharPattern,
    minUppercasePattern,
    errors,
    watch
  } = useRegister();
const password = watch("password");
  return (
    <div className="h-[92vh] flex items-center justify-center">
      <div className=" flex flex-col items-center gap-5 w-4/5">
        <div className="text-center">
          {message ? (
            <h1 className="font-bold text-3xl text-red-500"> {message} </h1>
          ) : (
            <h1 className="font-bold text-3xl"> Register Now ! </h1>
          )}
        </div>
        <div className="w-3/5">
          <form
            className="flex flex-col justify-center gap-8"
            onSubmit={handleSubmit(submitForm)}
          >
            <Input
              className="border border-black "
              label={"User Name"}
              type={"text"}
              placeholder="Enter your Name"
              {...register("userName", {
                required: true,
              })}
            />
            <Input
              className="border border-black "
              label={"Email"}
              type={"email"}
              placeholder="Enter your e-mail"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9. _%-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="error-message">{errors?.email?.message}</p>
            )}

            <Input
              className="border border-black "
              label={"Password"}
              type={"password"}
              placeholder="Enter your password"
              {...register("password", {
                required: true,
                validate: {
                  minLength: (value) =>
                    value.length >= 8 ||
                    "Password must be at least 8 characters",
                  uppercase: (value) =>
                    minUppercasePattern.test(value) ||
                    "Password must contain at least one uppercase letter",
                  lowercase: (value) =>
                    minLowercasePattern.test(value) ||
                    "Password must contain at least one lowercase letter",
                  number: (value) =>
                    minNumberPattern.test(value) ||
                    "Password must contain at least one number",
                  specialChar: (value) =>
                    minSpecialCharPattern.test(value) ||
                    "Password must contain at least one special character",
                },
              })}
            />
            {errors.password && (
              <p className="error-message">{errors?.password?.message}</p>
            )}
            <Input
            className="border border-black "
            label={"Confirm Password"}
            type={"password"}
            placeholder="Confirm your password"
            {...register("confirm-password", {
              required: true,
              validate:{
                valueMatch:(value)=> value===password || "Passwords must match"
              }
            })}
            />
            {errors["confirm-password"] && (
              <p className="error-message">{errors["confirm-password"]?.message}</p>
            )}
            <Button
              type="submit"
              className="bg-blue-400 border-2 hover:border-blue-500 hover:text-blue-500"
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
