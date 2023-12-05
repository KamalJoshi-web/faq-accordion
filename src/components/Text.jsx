import React from "react";

const Text = ({
  children,
  fSize = "text-base",
  color = "text-Darkpurple",
  fweight = "font-bold",
  className = "",
  ...props
}) => {
  return (
    <span
      className={`block  ${fweight} ${color} ${fSize} ${className} `}
      {...props}
    >
      {children}
    </span>
  );
};

export default Text;
