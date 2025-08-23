import { Meta, StoryObj } from '@storybook/react';
import Banner, { BannerProps } from '.';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://assets.apk.live/com.bscotch.crashlands--100000119-screenshot1.jpeg?x-oss-process=image/resize,h_1000/format,webp',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Best Seller',
    ribbonSize: 'small',
    ribbonColor: 'primary',
  },
  argTypes: { ribbon: { type: 'string' } },
  decorators: [
    (Story, i) => (
      <div
        key={i.id}
        style={{
          maxWidth: '100rem',

          margin: '0 auto',

          position: 'relative',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryObj<BannerProps> = {};
