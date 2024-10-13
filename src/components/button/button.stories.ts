import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './button';

import '@/styles/index.css';

const meta = {
  title: 'atom/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleButton: Story = {
  args: {
    children: 'Button',
    disabled: false,
  },
};

export const DisabledButton: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};
