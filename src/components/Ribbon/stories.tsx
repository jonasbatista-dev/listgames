import { Meta, StoryObj } from '@storybook/react';
import Ribbon, { RibbonProps } from '.';

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller',
    color: 'primary',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The text to display inside the ribbon',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'The color of the ribbon',
    },
  },
  decorators: [
    (Story, i) => (
      <div
        key={i.id}
        style={{
          maxWidth: '40rem',
          height: '25rem',
          margin: '0 auto',
          backgroundColor: '#888',
          position: 'relative',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Default: StoryObj<RibbonProps> = {};
