import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="w-50 h-12 bg-blue-500 text-white rounded-full text-center px-4 hover:bg-blue-700"
    >
      {children}
    </button>
  );
};

export default Button;
