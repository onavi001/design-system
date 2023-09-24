import { forwardRef, ReactNode } from 'react';
import styled from "@emotion/styled/macro";
import { css } from '@emotion/react';
import { darken, rgba } from 'polished';
import { color, typography } from '../../shared/styles';
import { easing } from '../../shared/animation';
import { icons } from '../../shared/icons';
import { Icon } from '../Icon';
interface ButtonProps {
    isDisabled?: boolean;
    isLoading?: boolean;
    containsIcon?: boolean;
    loadingText?: string;
    href?: string;
    appearance?: keyof typeof APPEARANCES;
    size?: keyof typeof SIZES;
    variant?: keyof typeof VARIANTS;
    children?: ReactNode;
    startIcon?: keyof typeof icons;
    endIcon?: keyof typeof icons;
}

const Text = styled.span`
  display: inline-block;
  vertical-align: top;
`;

const Loading = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  opacity: 0;
`;
export enum VARIANTS {
    DEFAULT = 'DEFAULT',
    TEXT = 'TEXT',
    OUTLINED = 'OUTLINED'
}
export enum APPEARANCES {
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY',
    TERTIARY = 'TERTIARY',
}
export enum SIZES {
    SMALL = 'SMALL',
    MEDIUM = 'MEDIUM',
    LARGE = 'LARGE',
}
type ButtonPropsStyle = {
    variant?: keyof typeof VARIANTS;
    size?: keyof typeof SIZES;
    appearance?: keyof typeof APPEARANCES;
    startIcon?: keyof typeof icons;
    endIcon?: keyof typeof icons;
    isLoading?: boolean;
    disabled?: boolean;
    isUnclickable?: boolean;
    containsIcon?: boolean;
    children?: ReactNode;
};
type PropsVariationStyle = {
    appearance?: keyof typeof APPEARANCES;
    variant?: keyof typeof VARIANTS;
    isLoading?: boolean,
}
const VariationStyle = ({appearance,variant,isLoading=false}:PropsVariationStyle):any => {
    let colorButton = appearance === APPEARANCES.SECONDARY ? color.secondary : appearance === APPEARANCES.TERTIARY ? color.tertiary : color.primary;
    
    if(variant === VARIANTS.OUTLINED){
        return css`
            box-shadow: ${colorButton} 0px 0px 0px 1px inset;
            background: transparent;
            color: ${colorButton};
            ${
                !isLoading &&
                `
                &:hover {
                    background: ${color.medium};
                    box-shadow: ${color.mediumdark} 0 0 0 1px inset;
                }
        
                &:active {
                    background: ${color.medium};
                    box-shadow: ${color.medium} 0 0 0 1px inset;
                    color: ${color.darkest};
                }
                &:focus {
                    box-shadow: ${color.medium} 0 0 0 1px inset, ${rgba(color.medium,0.4,)} 0 1px 9px 2px;
                }
                &:focus:hover {
                    box-shadow: ${color.medium} 0 0 0 1px inset, ${rgba(color.medium,0.2,)} 0 8px 18px 0px;
                }
                `
            };
        `;
    }
    if(variant === VARIANTS.TEXT){
        return css`
            background: transparent;
            color: ${colorButton};
            ${
                !isLoading &&
                `
                &:hover {
                    background: ${color.medium};
                }
        
                &:active {
                    background: ${color.medium};
                    color: ${color.darkest};
                }
                &:focus {
                    box-shadow: ${color.medium} 0 0 0 1px inset, ${rgba(color.medium,0.4,)} 0 1px 9px 2px;
                }
                &:focus:hover {
                    box-shadow: ${color.medium} 0 0 0 1px inset, ${rgba(color.medium,0.2,)} 0 8px 18px 0px;
                }
                `
            };
        `;
    }
    return css`
        background: ${colorButton};
        color: ${color.lightest};
        ${
            !isLoading &&
            `
            &:hover {
                background: ${darken(0.05, colorButton)};
            }
            &:active {
                box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
            }
            &:focus {
                box-shadow: ${rgba(colorButton, 0.4)} 0 1px 9px 2px;
            }
            &:focus:hover {
                box-shadow: ${rgba(colorButton, 0.2)} 0 8px 18px 0px;
            }
            `
        }
    `;
}

const StyledButton = styled.button<ButtonPropsStyle>`
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    padding: ${(props) => 
        props.size === SIZES.SMALL ? '8px 16px' :
        props.size === SIZES.LARGE ? '18px 24px' : '13px 20px' 
    };
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: all 150ms ease-out;
    transform: translate3d(0, 0, 0);
    vertical-align: top;
    white-space: nowrap;
    user-select: none;
    opacity: 1;
    margin: 0;
    background: transparent;

    font-size: ${
        (props) => 
        props.size === SIZES.SMALL ? typography.size.s1 : 
        props.size === SIZES.LARGE ? typography.size.s3 : typography.size.s2
    }px;
    font-weight: ${typography.weight.extrabold};
    line-height: 1;

    ${(props) =>
        !props.isLoading &&
        `
        &:hover {
            transform: translate3d(0, -2px, 0);
            box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
        }

        &:active {
            transform: translate3d(0, 0, 0);
        }

        &:focus {
            box-shadow: ${rgba(color.primary, 0.4)} 0 1px 9px 2px;
        }

        &:focus:hover {
            box-shadow: ${rgba(color.primary, 0.2)} 0 8px 18px 0px;
        }
    `}
    ${Text} {
        transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
        transition: transform 700ms ${easing.rubber};
        opacity: 1;
    }

    ${Loading} {
        transform: translate3d(0, 100%, 0);
    }

    svg {
        height: ${
            (props) => (
                props.size === SIZES.SMALL ? '14' : 
                props.size === SIZES.LARGE ? '18' : '16'
        )}px;
        width: ${
            (props) => (
                props.size === SIZES.SMALL ? '14' : 
                props.size === SIZES.LARGE ? '18' : '16'
        )}px;
        vertical-align: top;
        ${(props)=>
            props.startIcon && 
            `
            margin-right: ${
                    props.size === SIZES.SMALL ? '4' : 
                    props.size === SIZES.LARGE ? '8' : '6'
            }px;
            `
        }
        ${(props)=>
            props.endIcon && 
            `
            margin-left: ${
                props.size === SIZES.SMALL ? '4' : 
                props.size === SIZES.LARGE ? '8' : '6'
            }px;
            `
        }
        
        margin-top: -1px;
        margin-bottom: -1px;

        /* Necessary for js mouse events to not glitch out when hovering on svgs */
        pointer-events: none;
    }
    

    ${(props) =>
        props.disabled &&
        `
        cursor: not-allowed !important;
        opacity: 0.5;
        &:hover {
            transform: none;
        }
    `}

    ${(props) =>
        props.isUnclickable &&
        `
        cursor: default !important;
        pointer-events: none;
        &:hover {
            transform: none;
        }
    `}

    ${(props) =>
        props.isLoading &&
        `
        cursor: progress !important;
        opacity: 0.7;

        ${Loading} {
            transition: transform 700ms ${easing.rubber};
            transform: translate3d(0, -50%, 0);
            opacity: 1;
        }

        ${Text} {
            transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);
            opacity: 0;
        }

        &:hover {
            transform: none;
        }
    `}

    ${(props) =>
        props.containsIcon &&
        `
        
        svg {
            display: block;
            margin: 0;
        }
        padding: ${
            props.size === SIZES.SMALL ? '7' :
            props.size === SIZES.LARGE ? '17' : '12'
        }px;
    `}
    ${
        ({appearance,variant,isLoading})=>VariationStyle({appearance,variant,isLoading})
    }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        isDisabled,
        isLoading,
        loadingText,
        children,
        startIcon,
        endIcon,
        href,
        ...props
      },
      ref
    ) => {
        const handleClick = () => {
            if (href && !isDisabled && !isLoading) {
                window.location.href = href;
            }
        };
        return (
            <StyledButton
                disabled={isDisabled}
                isLoading={isLoading}
                startIcon={startIcon}
                endIcon={endIcon}
                {...props}
                ref={ref}
            >
                <>
                    {startIcon && <Icon icon={startIcon}  ></Icon>}
                    <Text>{children}</Text>
                    {isLoading && <Loading>{loadingText || 'Loading...'}</Loading>}
                    {endIcon && <Icon icon={endIcon}  ></Icon>}
                </>
            </StyledButton>
        );
    }
);