import { Meta, StoryObj } from "@storybook/react-webpack5";
import React, { useState } from "react";

import Select, { SelectProps, SelectOption } from "./Select";
import "./Select.scss";

const meta: Meta<SelectProps> = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    options: {
      control: "object",
      description: "Array of options for select",
    },
    value: {
      control: "text",
      description: "Selected value",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Disable select",
    },
    className: {
      control: "text",
      description: "Custom className",
    },
    onChange: { action: "changed", description: "Change handler" },
  },
};

export default meta;

type Story = StoryObj<SelectProps>;

const defaultOptions: SelectOption[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
];

export const Basic: Story = {
  args: {
    options: defaultOptions,
    value: "",
    placeholder: "Choose a fruit",
    className: "select",
    disabled: false,
  },
  render: args => {
    const [value, setValue] = useState("");
    return (
      <Select
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    );
  },
};

export const WithPlaceholder: Story = {
  args: {
    options: defaultOptions,
    value: "",
    placeholder: "Select something...",
    className: "select",
    disabled: false,
  },
  render: args => {
    const [value, setValue] = useState("");
    return (
      <Select
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    value: "",
    placeholder: "Disabled select",
    className: "select",
    disabled: true,
  },
};

export const NumericOptions: Story = {
  args: {
    options: [
      { value: 1, label: "One" },
      { value: 2, label: "Two" },
      { value: 3, label: "Three" },
    ],
    value: "",
    placeholder: "Pick a number",
    className: "select",
    disabled: false,
  },
  render: args => {
    const [value, setValue] = useState<number | string>("");
    return (
      <Select
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    );
  },
};

export const WithoutOptions: Story = {
  args: {
    options: [],
    value: "",
    placeholder: "No options available",
    className: "select",
    disabled: false,
  },
  render: args => {
    const [value, setValue] = useState("");
    return (
      <Select
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    );
  },
};
