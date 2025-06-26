import React from "react";
import "./Button.scss";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "text" | "contained" | "outlined";
  size: "small" | "medium" | "large";
};

export const Button: React.FC<ButtonProps> = props => {
  return (
    <button
      {...props}
      className={`button button_${props.variant ?? "contained"} button_${props.size ?? "medium"}`}
    >
      {props.children}
    </button>
  );
};
