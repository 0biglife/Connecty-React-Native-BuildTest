import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styled, { css } from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: #e3e3e3;
    align-items: center;
    justify-content: center;
`;

const cssText = css`
    font-size: 20px;
    font-weight: 600;
`;

const StyledText = styled.Text`
    ${cssText}
    color: blue;
`;

const ErrorTst = styled(StyledText)` //styled 상속 받아서 쓰기
    ${cssText}
    color: red;
`;

const StyledButton = styled.Button`

`;
 
export default function App() {
    return (
      <Container>
          <StatusBar style="auto" />
          <StyledText>Styled Components!</StyledText>
          <StyledButton title="Styled" onPress={() => alert('alert!')} />
      </Container>
    );
}
