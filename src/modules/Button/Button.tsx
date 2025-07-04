import React from "react";

import "./Button.scss";

export type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  classes?: string;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  size = "medium",
  classes = "",
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`button button_${size} button_${variant} ${classes}`}
    >
      {children}
    </button>
  );
};
