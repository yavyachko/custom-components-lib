import { Meta, StoryObj } from "@storybook/react-webpack5";

import { Button, ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text", description: "Button content" },
    onClick: { action: "clicked", description: "Button callback" },
    disabled: { control: "boolean", description: "Button accessability" },
    variant: {
      control: "select",
      description: "Button styling",
      options: ["contained", "text", "outlined"],
    },
    size: {
      control: "select",
      description: "Size of button (padding to inner content)",
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Contained: Story = {
  args: {
    children: "Contained Button",
    variant: "contained",
    size: "medium",
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    children: "Text Button",
    variant: "text",
    size: "medium",
    disabled: false,
  },
};

export const Outlined: Story = {
  args: {
    children: "Outlined Button",
    variant: "outlined",
    size: "medium",
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    variant: "contained",
    size: "small",
    disabled: false,
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Button",
    variant: "contained",
    size: "medium",
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    variant: "contained",
    size: "large",
    disabled: false,
  },
};
