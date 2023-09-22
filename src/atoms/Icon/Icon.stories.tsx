import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Icon } from './Icon';
import { icons } from '../../shared/icons';
import type { Icons } from '../../shared/icons';

const Meta = styled.div`
  color: #666;
  font-size: 12px;
`;

interface ItemProps {
  minimal?: boolean;
}

const Item = styled.li<ItemProps>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 20%;
  min-width: 120px;

  padding: 0px 7.5px 20px;

  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }

  ${(props) =>
    props.minimal &&
    css`
      flex: none;
      min-width: auto;
      padding: 0;
      background: #fff;
      border: 1px solid #666;

      svg {
        display: block;
        margin-right: 0;
        width: 48px;
        height: 48px;
      }
    `};
};`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;

const meta: Meta<typeof Icon> = {
  title: 'Design System/Icon',
  tags: ['autodocs'],
  component: Icon,
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Labels: React.FC = () => (
  <>
    There are {Object.keys(icons).length} icons
    <List>
      {Object.keys(icons).map((key) => (
        <Item key={key}>
          <Icon icon={key as keyof typeof icons} aria-hidden />
          <Meta>{key}</Meta>
        </Item>
      ))}
    </List>
  </>
);

export const NoLabels: React.FC = () => (
  <List>
    {Object.keys(icons).map((key) => (
      <Item minimal key={key}>
        <Icon icon={key as keyof typeof icons} aria-label={key} />
      </Item>
    ))}
  </List>
);

export const Inline : Story = {
  render: (args) => (
    <>
      this is an inline <Icon {...args} /> icon (default)
    </>
  ),
  args: {
    icon: 'facehappy',
    'aria-label': 'Happy face',
  },
};

export const Block : Story= {
  render: (args) => (
    <>
      this is a block <Icon {...args} /> icon
    </>
  ),
  args: {
    icon: 'facehappy',
    'aria-label': 'Happy face',
    block: true,
  },
};
