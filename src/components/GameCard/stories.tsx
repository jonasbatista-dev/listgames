import { Meta, StoryObj } from '@storybook/react';
import GameCard from '.';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/red-dead-img.jpg',
    price: '$235.00',
    promotionalPrice: '$200.00',
  },
  argTypes: {
    onFav: { action: 'clicked' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ width: '32rem' }}>
        <Story />
      </div>
    ),
  ],
};
