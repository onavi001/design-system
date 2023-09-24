import type { Meta, StoryObj } from '@storybook/react';

import { Button, APPEARANCES, SIZES, VARIANTS } from './Button';
import { Icon } from '../Icon';

const meta: Meta<typeof Button> = {
    title: 'Design System/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        appearance:{
            defaultValue: APPEARANCES.PRIMARY,
            control: 'select',
            options: Object.keys(APPEARANCES)
        },
        size:{
            defaultValue: SIZES.MEDIUM,
            control: 'select',
            options: Object.keys(SIZES)
        },
        variant:{
            defaultValue: VARIANTS.DEFAULT,
            control: 'select',
            options: Object.keys(VARIANTS)
        },
        isDisabled: {
            defaultValue: false
        },
        isLoading: {
            defaultValue: false
        },containsIcon:{
            defaultValue: false
        }
    },
    render: (args) => (
        <Button {...args}>Text...</Button>
    ),
};

export default meta;
type Story = StoryObj<typeof Button>;
export const Standar : Story = {
    render: (args) => (
        <Button {...args}>Text...</Button>
    ),
};
export const BasicsButton : Story = {
    render: () => (
        <>
            {
                Object.values(APPEARANCES).map( (appearance) => 
                    <Button appearance={appearance} >{appearance}</Button>
                )
            }
        </>
    ),
};
export const SizeButton : Story = {
    render: () => (
        <>
            {
                Object.values(APPEARANCES).map( (appearance) => 
                    Object.values(SIZES).map( (size) => 
                        <Button appearance={appearance} size={size} >DEFAULT</Button>
                    )  
                )
            }
        </>
    ),
};
export const IconButton : Story = {
    render: () => (
        <>
            <Button startIcon='delete' >
                DELETE
            </Button>
            <Button endIcon='back' >
                BACK
            </Button>
            <Button containsIcon >
                <Icon icon='facehappy' />
            </Button>
        </>
    )
}
export const LinkButton : Story = {
    render: () => (
        <>
            <Button
                variant={VARIANTS.OUTLINED}
                size={SIZES.SMALL} 
                startIcon='link'
                href='#location'
            >
                Link
            </Button>
        </>
    )
}