import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

import TextField from "./TextField";

describe("TextField", () => {
  it("renders label", () => {
    render(<TextField label="Test label" variant="standart" />);
    expect(screen.getByText("Test label")).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(<TextField label="Label" error="Ошибка" variant="standart" />);
    expect(screen.getByText("Ошибка")).toBeInTheDocument();
  });

  it("passes value and onChange", () => {
    const handleChange = jest.fn();
    render(
      <TextField
        label="Label"
        value="abc"
        onChange={handleChange}
        variant="standart"
      />,
    );
    const input = screen.getByLabelText("Label");
    expect(input).toHaveValue("abc");
    fireEvent.change(input, { target: { value: "def" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("applies variant class", () => {
    render(<TextField label="Label" variant="outlined" />);
    const input = screen.getByLabelText("Label");
    expect(input.className).toMatch(/textfield__input_outlined/);
  });

  it("shows disabled state", () => {
    render(<TextField label="Label" disabled variant="standart" />);
    const input = screen.getByLabelText("Label");
    expect(input).toBeDisabled();
  });

  it("applies custom classes", () => {
    render(
      <TextField label="Label" variant="standart" classes="my-custom-class" />,
    );
    const input = screen.getByLabelText("Label");
    expect(input.className).toMatch(/my-custom-class/);
  });

  it("passes placeholder prop", () => {
    render(
      <TextField label="Label" variant="standart" placeholder="Введите имя" />,
    );
    const input = screen.getByLabelText("Label");
    expect(input.getAttribute("placeholder")).toBe("Введите имя");
  });

  it("passes type prop", () => {
    render(<TextField label="Label" variant="standart" type="password" />);
    const input = screen.getByLabelText("Label");
    expect(input).toHaveAttribute("type", "password");
  });
});
