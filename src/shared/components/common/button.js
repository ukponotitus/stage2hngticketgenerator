import React from "react";

const Button = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "", 
  ...props
}) => {
  const baseStyles = "px-6 py-2 w-full  rounded-lg";
  const variants = {
    primary: "bg-[#24A0B5] text-white",
    secondary: "border border-[#24A0B5] text-[#24A0B5]",
    tertiary: "bg-white text-gray-900 px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm md:text-base font-jeju",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`.trim()}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
