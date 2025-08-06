import { Meta, StoryObj } from '@storybook/react';
import { MdAddShoppingCart } from 'react-icons/md';
import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Buy now',
  },
};

export const withIcon: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
    children: 'Buy now',
    icon: <MdAddShoppingCart />,
  },
};
