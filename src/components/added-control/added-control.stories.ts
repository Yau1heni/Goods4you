import type { Meta, StoryObj } from '@storybook/react';
import {AddedControl} from "./added-control";

import '@/styles/index.css'

const meta = {
    title: 'Molecules/AddedControl',
    component: AddedControl,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AddedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddedControlWithOneItem: Story = {
    args: {
        amountProducts: 1
    },
};

export const AddedControlMultiItem: Story = {
    args: {
        amountProducts: 5
    },
};


