import { Meta, StoryObj } from '@storybook/react';
import Footer from '.';

export default {
  title: 'Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '100rem', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Default: StoryObj = {};
