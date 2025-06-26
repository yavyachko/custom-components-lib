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

export const Primary: Story = {
  args: {
    children: "Primary Button",
    disabled: false,
  },
};
