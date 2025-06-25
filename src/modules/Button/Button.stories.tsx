import { Meta, StoryObj } from "@storybook/react-webpack5";

import { Button, ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    onClick: { action: "clicked" },
    disabled: { control: "boolean" },
    variant: { control: "select", options: ["primary", "secondary", "danger"] },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "primary",
    disabled: true,
  },
};
