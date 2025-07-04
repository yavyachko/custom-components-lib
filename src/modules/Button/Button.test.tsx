import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

import { Button } from "./Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies variant and size classes", () => {
    render(
      <Button variant="outlined" size="large">
        Test
      </Button>,
    );
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("button");
    expect(btn).toHaveClass("button_outlined");
    expect(btn).toHaveClass("button_large");
  });

  it("applies custom classes", () => {
    render(<Button classes="my-class">Test</Button>);
    expect(screen.getByRole("button")).toHaveClass("my-class");
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Test</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
