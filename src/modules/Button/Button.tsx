import React from "react";
import "./Button.scss";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary" | "danger";
};

export const Button: React.FC<ButtonProps> = props => {
  return (
    <button {...props} className={`button--${props.variant}`}>
      {props.children}
    </button>
  );
};
