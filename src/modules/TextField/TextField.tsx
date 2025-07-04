import React from "react";
import "./TextField.scss";

type TextFieldProps = React.ComponentProps<"input"> & {
  label: string;
  error?: string;
  variant: "outlined" | "contained" | "standart";
  classes?: string;
};

export default function TextField({
  label = "Input",
  error,
  variant = "standart",
  classes,
  ...props
}: TextFieldProps) {
  return (
    <div className="textfield">
      <input
        className={`textfield__input textfield__input_${variant}${error ? " textfield__input_error" : ""} ${classes}`}
        placeholder=" "
        {...props}
      />
      <label className="textfield__label">{label}</label>
      {error && <p className="textfield__error">{error}</p>}
    </div>
  );
}
