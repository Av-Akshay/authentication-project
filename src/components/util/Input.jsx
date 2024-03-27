import React from "react";

const Input = React.forwardRef(function Input({ type,  className, label , ...props },ref) {
  return (
    <div>
      {label && (
        <label className="font-medium text-xl" htmlFor={label}>
          {" "}
          {label}:-{" "}
        </label>
      )}

      <input
        type={type}
        id={label}
        {...props}
        ref={ref}
        className={`input font-medium text-xl outline-none rounded-lg px-5 py-2 input-bordered w-full ${className}`}
      />
    </div>
  );
});

export default Input;
