import type { Meta, StoryObj } from "@storybook/react-webpack5";

import TextField from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    label: { control: "text" },
    error: { control: "text" },
    variant: {
      control: "select",
      options: ["outlined", "contained", "standart"],
    },
    disabled: { control: "boolean" },
    value: { control: "text" },
    placeholder: { control: "text" },
  },
  args: {
    label: "Label",
    placeholder: "Введите текст",
    value: "",
    error: "",
    disabled: false,
    variant: "standart",
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Standart: Story = {
  args: {
    variant: "standart",
    label: "Стандартный",
    placeholder: "",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    label: "Outlined",
    placeholder: "",
  },
};

export const Contained: Story = {
  args: {
    variant: "contained",
    label: "Contained",
    placeholder: "",
  },
};

export const WithError: Story = {
  args: {
    variant: "outlined",
    label: "С ошибкой",
    error: "Ошибка ввода",
    placeholder: "",
  },
};

export const Disabled: Story = {
  args: {
    variant: "standart",
    label: "Disabled",
    disabled: true,
    placeholder: "",
  },
};
