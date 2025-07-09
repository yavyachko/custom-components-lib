import React from "react";

export interface SelectOption {
  value: string | number;
  label: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: SelectOption[];
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  options = [],
  placeholder = "Select...",
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <select disabled={disabled} className={`select ${className}`} {...props}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
