import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";
import Select, { SelectOption } from "./Select";

describe("Select Component", () => {
  const mockOptions: SelectOption[] = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  it("renders with default props", () => {
    render(<Select options={mockOptions} />);

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveClass("select");

    expect(screen.getByText("Select...")).toBeInTheDocument();

    mockOptions.forEach(option => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it("applies custom className", () => {
    const testClassName = "test-class";
    render(<Select options={mockOptions} className={testClassName} />);

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toHaveClass("select");
    expect(selectElement).toHaveClass(testClassName);
  });

  it("shows custom placeholder", () => {
    const placeholder = "Choose an option";
    render(<Select options={mockOptions} placeholder={placeholder} />);

    expect(screen.getByText(placeholder)).toBeInTheDocument();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Select options={mockOptions} disabled />);

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeDisabled();
  });

  it("calls onChange handler when selection changes", () => {
    const handleChange = jest.fn();
    render(<Select options={mockOptions} onChange={handleChange} />);

    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "2" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("displays the correct selected value", () => {
    const selectedValue = "2";
    render(<Select options={mockOptions} value={selectedValue} />);

    const selectElement = screen.getByRole("combobox") as HTMLSelectElement;
    expect(selectElement.value).toBe(selectedValue);
  });

  it("renders with empty options array", () => {
    render(<Select options={[]} />);

    const selectElement = screen.getByRole("combobox");
    const options = selectElement.querySelectorAll("option");

    expect(options).toHaveLength(1);
    expect(options[0].disabled).toBe(true);
    expect(options[0].value).toBe("");
  });

  it("applies additional HTML attributes", () => {
    const testId = "test-select";
    render(<Select options={mockOptions} data-testid={testId} />);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
