import React from "react";

import { Button, Input, ExpireTokenPage} from "../components";
import useResetPassword from "../hook/useResetPassword";

const ResetPassword = () => {
  const {
    handleSubmit,
    register,
    resetPass,
    message,
    watch,
    errors,
    minLowercasePattern,
    minNumberPattern,
    minSpecialCharPattern,
    minUppercasePattern,
    expireTokenMessage,
    toggle
  } = useResetPassword();

  const password = watch("password");

  return (
    <div className="h-[92vh] flex items-center justify-center flex-col gap-2 relative">
      <h1 className=" text-center font-bold text-2xl text-green-500 transition-all">
        {message}
      </h1>
      <div>
        {
          expireTokenMessage?(
          <ExpireTokenPage expireTokenMessage={expireTokenMessage} toggle={toggle}/>
          ):null
        }
      </div>
      <div className="w-11/12 flex items-center ">
        <div className="w-1/2">
          <figcaption>
            <img
              src="https://img.freepik.com/premium-vector/reset-your-passwords-concept-icon_106317-34958.jpg"
              alt="forgot password logo"
            />
          </figcaption>
        </div>
        <div className="w-1/2 p-2">
          <form
            className="flex items-center justify-center w-full"
            onSubmit={handleSubmit(resetPass)}
          >
            <div className="flex flex-col gap-5 w-full">
              <h1 className=" text-6xl text-slate-900">
                Reset
                <br />
                Your Password
              </h1>
              <p className="font-medium">
                Please enter the new password below...
              </p>
              <Input
                className="border-b-2 border-blue-400 shadow-md shadow-blue-200"
                type={"password"}
                placeholder="Enter your new password"
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
                className="border-b-2 border-blue-400 shadow-md shadow-blue-200"
                type={"password"}
                placeholder="Confirm password"
                {...register("confirmPassword", {
                  required: true,
                  validate: {
                    valueMatch: (value) =>
                      value === password || "Passwords must match",
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
                    "w-fit bg-blue-400  border-2 hover:border-blue-500 hover:bg-transparent hover:text-blue-500"
                  }
                  type={"submit"}
                >
                  Reset Password
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
