import React from 'react';
import './App.css';
import Calculator from './Components/Calculator';
import styled from 'styled-components'

const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #323232;
`;

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
