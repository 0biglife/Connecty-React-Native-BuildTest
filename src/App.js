import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import styled, { ThemeProvider } from 'styled-components/native';
import Input from './Input';
import {Switch} from 'react-native';

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.bgColor};
    align-items: center;
    justify-content: center;
`;

const lightTheme = {
    inputColor: '#111111',
    inputBorder: '#111111',
    bgColor: '#e3e3e3',
};
 
const darkTheme = {
    inputColor: '#e3e3e3',
    inputBorder: '#e3e3e3',
    bgColor: '#111111',
};

export default function App() {
    const [isLight,toggleTheme] = useState(true);
    return (
        <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
            <Container>
                <StatusBar style="auto" />
                <Switch 
                    value={isLight}
                    onValueChange={isLight => toggleTheme(isLight)}
                />
                <Input placeholder="Type that.." />
                <Input />
            </Container>
        </ThemeProvider>
    );
}
