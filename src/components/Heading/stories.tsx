import { Meta, StoryObj } from '@storybook/react';
import Heading, { HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Default: StoryObj<HeadingProps> = {};

Default.args = {
  children: 'Most Populars',
};
