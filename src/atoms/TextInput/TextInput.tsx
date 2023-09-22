import React, { ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface TextInputProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  style?: React.CSSProperties;
  inputSize?: 'small' | 'medium' | 'large'
}

const InputWrapper = styled.div<{ error?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  label {
    margin-bottom: 5px;
    color: ${(props) => (props.error ? 'red' : 'black')};
    font-weight: bold;
  }
`;
const inputSizeStyles = {
  small: css`
    font-size: 14px;
    padding: 5px;
  `,
  medium: css`
    font-size: 16px;
    padding: 8px;
  `,
  large: css`
    font-size: 18px;
    padding: 10px;
  `,
};
const Input = styled.input<{ error?: boolean, disabled: boolean, inputSize: 'small' | 'medium' | 'large'}>`
  ${props => inputSizeStyles[props.inputSize]}
  padding: 4px 0px 5px;
  width: 100%;
  border: ${(props) => (props.error ? '2px solid #ff0000' : '1px solid #808080')};
  border-radius: 4px;
  outline: none;
  ${(props) =>
    props.disabled &&
    css`
      background-color: #d3d3d3;
      cursor: not-allowed;
    `}
`;

export const TextInput: React.FC<TextInputProps> = ({
  value,
  placeholder,
  onChange,
  label,
  disabled = false,
  error,
  style,
  inputSize = 'medium',
  ...props
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <InputWrapper error={error}>
      {label && <label>{label}</label>}
      <Input
        error={error}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        disabled={disabled}
        inputSize={inputSize}
        style={style}
        {...props}
      />
    </InputWrapper>
  );
};

