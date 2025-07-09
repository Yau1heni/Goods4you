import type { Meta, StoryObj } from '@storybook/react';
import { TitleSection } from './title-section';
import '@/styles/index.css';
import { Theme } from '@/types';

const meta = {
  title: 'atom/TitleSection',
  component: TitleSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TitleSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleDark: Story = {
  args: {
    title: 'Title dark',
    color: Theme.DARK,
  },
};

export const TitleLight: Story = {
  args: {
    title: 'Title light',
    color: Theme.LIGHT,
  },
};
