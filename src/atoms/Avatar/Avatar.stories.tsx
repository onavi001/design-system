import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Design System/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['tiny', 'small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Standard : Story = {
  args: {
    size: 'large',
    username: 'Tom Coleman',
    src: 'https://avatars2.githubusercontent.com/u/132554',
  },
};

/**
 * 4 sizes are supported.
 */
export const Sizes : Story = {
  render: (args) => (
    <>
      <Avatar {...args} size='large' />
      <Avatar {...args} size='medium' />
      <Avatar {...args} size='small' />
      <Avatar {...args} size='tiny' />
    </>
  ),
  args: {
    username: 'Tom Coleman',
    src: 'https://avatars2.githubusercontent.com/u/132554',
  }
};

/**
 * Avatar component using Controls
 */
export const Controls : Story = {
  args: {
    loading: false,
    size: 'tiny',
    username: 'Ivan Perez',
    src: 'https://avatars.githubusercontent.com/u/263385',
  },
};