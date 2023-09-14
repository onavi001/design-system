import { css } from '@emotion/react';

// Define a type for background object
type Background = {
  app: string;
  appInverse: string;
  positive: string;
  negative: string;
  warning: string;
}
// Define a type for color object
type Color = {
  primary: string;
  secondary: string;
  tertiary: string;
  orange: string;
  gold: string;
  green: string;
  seafoam: string;
  purple: string;
  ultraviolet: string;
  lightest: string;
  lighter: string;
  light: string;
  mediumlight: string;
  medium: string;
  mediumdark: string;
  dark: string;
  darker: string;
  darkest: string;
  border: string;
  positive: string;
  negative: string;
  warning: string;
}
// Define a type for the spacing object
type Spacing = {
  padding: {
    small: number;
    medium: number;
    large: number;
  };
  borderRadius: {
    small: number;
    default: number;
  };
};

// Define a type for the typography object
type Typography = {
  type: {
    primary: string;
    code: string;
  };
  weight: {
    regular: number;
    bold: number;
    extrabold: number;
    black: number;
  };
  size: {
    s1: number;
    s2: number;
    s3: number;
    m1: number;
    m2: number;
    m3: number;
    l1: number;
    l2: number;
    l3: number;
    code: number;
  };
};

// Global style variables
export const background : Background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF',
};

export const color : Color = {
  // Palette
  primary: '#FF4785', // coral
  secondary: '#1EA7FD', // ocean
  tertiary: '#DDDDDD',

  orange: '#FC521F',
  gold: '#FFAE00',
  green: '#66BF3C',
  seafoam: '#37D5D3',
  purple: '#6F2CAC',
  ultraviolet: '#2A0481',

  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',

  border: 'rgba(0,0,0,.1)',

  // Status
  positive: '#66BF3C',
  negative: '#FF4400',
  warning: '#E69D00',
};

export const spacing : Spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};

export const typography : Typography = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: 400,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90,
  },
};

export const breakpoint : number = 600;
export const pageMargin : number = 5.55555;

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;
