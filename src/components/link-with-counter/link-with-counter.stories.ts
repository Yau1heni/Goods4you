import type { Meta, StoryObj } from '@storybook/react';
import { LinkWithCounter } from './link-with-counter.tsx';
import { withRouter } from 'storybook-addon-remix-react-router';

import '@/styles/index.css';

const meta = {
  title: 'Molecules/LinkWithCounter',
  component: LinkWithCounter,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LinkWithCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleCounter: Story = {
  args: {
    counter: 20,
    title: 'Simple counter',
  },
};

export const ZeroCounter: Story = {
  args: {
    counter: 0,
    title: 'Zero counter',
  },
};

export const OverflowCounter: Story = {
  args: {
    counter: 100,
    title: 'Overflow counter',
  },
};
