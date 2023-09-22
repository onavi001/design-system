import React, { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { TextInputProps, TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Design System/TextInput',
  tags: ['autodocs'],
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;


export const Input : Story = {
  args: {
    placeholder: 'Type something here...',
  },
};

export const WithLabel : Story = {
  args: {
    placeholder: 'Type something here...',
    label: 'label:',
  }
}

export const Disable : Story = {
  args: {
    placeholder: 'Type something here...',
    disabled: true,
  }
}

export const ErrorState : Story = {
  args: {
    placeholder: 'Type something here...',
    error: true,
  }
}

export const CustomStyles : Story = {
  args: {
    placeholder: 'Type something here...',
    style: { backgroundColor: 'lightgray', border: '2px solid red' },
  }
}

export const SmallInput : Story = {
  args: {
    placeholder: 'Type something here...',
    inputSize: 'large'
  }
}
export const MediumInput : Story = {
  args: {
    placeholder: 'Type something here...',
    inputSize: 'medium'
  }
}
export const LargeInput : Story = {
  args: {
    placeholder: 'Type something here...',
    inputSize: 'large'
  }
}

