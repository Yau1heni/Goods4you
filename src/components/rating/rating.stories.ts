import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './rating';

import '@/styles/index.css';

const meta = {
  title: 'atom/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleRating: Story = {
  args: {
    ratingValue: 4,
  },
};
