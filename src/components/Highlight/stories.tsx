import { Meta, StoryObj } from '@storybook/react';
import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see John's new adventures",
    buttonLink: '/rdr2',
    buttonLabel: 'Buy now',
    backgroundImage: '/img/red-dead-img.jpg',
  },
} as Meta<HighlightProps>;

export const WithFloatImage: StoryObj<HighlightProps> = {
  args: {
    floatImage: '/img/red-dead-float.png',
  },
};

export const WithoutFloatImage: StoryObj<HighlightProps> = {
  args: {
    floatImage: undefined,
  },
};
