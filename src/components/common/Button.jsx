import React from "react";

const Button = ({
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-3 py-1.5 rounded-lg font-medium text-sm focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-sky-500 text-white hover:bg-sky-600 focus:ring-2 focus:ring-sky-400",
    secondary:
      "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300",
    ghost:
      "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
