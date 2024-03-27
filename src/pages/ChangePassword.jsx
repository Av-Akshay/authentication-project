import React from "react";
import { Button, Input } from "../components";

import useChangePassword from "../hook/useChangePassword";

const ChangePassword = () => {
  const {
    handleSubmit,
    register,
    message,
    changePassword,
    watch,
    errors,
    minLowercasePattern,
    minNumberPattern,
    minSpecialCharPattern,
    minUppercasePattern,
  } = useChangePassword();

  const confirmPassword = watch("newPassword");

  return (
    <div className="h-[92vh] flex items-center justify-center flex-col gap-2">
      <h1 className=" text-center font-bold text-2xl text-green-500 transition-all">
        {message}
      </h1>
      <div className="w-11/12 flex items-center ">
        <div className="w-1/2">
          <figcaption>
            <img
              src="https://app.propertybank.in.net/assets/images/pages/reset-password.png"
              alt="forgot password logo"
            />
          </figcaption>
        </div>
        <div className="w-1/2 p-2">
          <form
            className="flex items-center justify-center w-full"
            onSubmit={handleSubmit(changePassword)}
          >
            <div className="flex flex-col gap-5 w-full">
              <h1 className=" text-6xl text-slate-900">
                Change
                <br />
                Password
              </h1>
              <p className="font-medium">
                Please enter your old and new password below...
              </p>
              <Input
                className="border-b-2 border-blue-400 shadow-md shadow-blue-200"
                type={"password"}
                placeholder="Enter your old password"
                {...register("oldPassword", {
                  required: true,
                })}
              />
              <Input
                className="border-b-2 border-blue-400 shadow-md shadow-blue-200"
                type={"password"}
                placeholder="Enter your new password"
                {...register("newPassword", {
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
              {errors.newPassword && (
                <p className="error-message">{errors?.newPassword?.message}</p>
              )}
              <Input
                className="border-b-2 border-blue-400 shadow-md shadow-blue-200"
                type={"password"}
                placeholder="confirm password"
                {...register("confirmPassword", {
                  required: true,
                  validate: {
                    valueMatch: (value) =>
                      value === confirmPassword || "Passwords must match",
                  },
                })}
              />
              {errors.confirmPassword && (
                <p className="error-message">
                  {errors?.confirmPassword?.message}
                </p>
              )}
              <div className="w-full flex justify-end items-center">
                <Button
                  className={
                    "w-fit bg-blue-400 border-2 hover:border-blue-400 hover:bg-transparent hover:text-blue-500 "
                  }
                  type={"submit"}
                >
                  Change Password
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
