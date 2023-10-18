import React from "react";

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={`px-3 py-2 rounded-xl text-sm font-medium text-center focus:outline-none ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
