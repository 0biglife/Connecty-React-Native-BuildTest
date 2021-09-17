import React, {useState} from 'react';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput.attrs(({placeholder, theme}) => ({
    placeholder: placeholder || "Enter a text!!...",
    placeholderTextColor: theme.inputColor,
}))`
  padding: 20px;
  font-size: 20px;
  border: 1px solid ${({theme}) => theme.inputBorder};
`;

const Input = ({placeholder}) => {
    const [text, setText] = useState('');
    return (
        <StyledInput 
            onChangeText={text => setText(text)} 
            text={text} 
            placeholder={placeholder}
        />
    );
};

export default Input;