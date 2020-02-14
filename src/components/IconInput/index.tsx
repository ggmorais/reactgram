import React, { FC, InputHTMLAttributes } from 'react';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';

interface IIconInput extends InputHTMLAttributes<HTMLInputElement> {}

const Label = styled.label`
  display: flex;
  padding: 5px;
  align-items: center;
  
  background-color: ${props => props.theme.base1};
  border: 1px solid ${props => props.theme.base3};
  box-shadow: 0px 0px 1px ${props => props.theme.shadow};
  
  input {
    border: none;
    padding-left: 3px;
    background-color: transparent;
    color: ${props => props.theme.font1};
    
    &::placeholder {
      color: ${props => props.theme.font2};
    };
  }
`;

const IconInput: FC<IIconInput> = ({ onChange, value, style, placeholder }) => {
  return (
    <Label>
      <MdSearch />
      <input type="text" onChange={onChange} value={value} placeholder={placeholder} />
    </Label>
  );
};

export default IconInput;