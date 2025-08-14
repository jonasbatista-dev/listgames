import { Meta, StoryObj } from '@storybook/react';
import MediaMatch from '.';

export default {
  title: 'MediaMatch',
  component: MediaMatch,
} as Meta;

export const Desktop: StoryObj = {
  render: () => <MediaMatch greaterThan="medium">Desktop</MediaMatch>,
};

export const Mobile: StoryObj = {
  render: () => <MediaMatch lessThan="medium">Mobile</MediaMatch>,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
