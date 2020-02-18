import React, { useState } from 'react';
import { View } from 'react-native';
import Button from './components/Button';
import Display from './components/Display';
import styled from 'styled-components/native';

export default () => {
  const [displayValue, setDisplayValue] = useState(0);

  const addDigit = n => {
    setDisplayValue(n)
  }

  const ClearMemory = () => {
    setDisplayValue(0)
  }

  const setOperation = op => {

  }

  return (
    <Container>
      <Display value={displayValue} />
      <ButtonsWrapper>
        <Button label='AC' triple onClick={ClearMemory} />
        <Button label='/' operation onClick={() => setOperation(`/`)} />
        <Button label='9' onClick={() => addDigit(9)} />
        <Button label='8' onClick={() => addDigit(8)} />
        <Button label='7' onClick={() => addDigit(7)} />
        <Button label='*' operation onClick={() => setOperation(`*`)} />
        <Button label='6' onClick={() => addDigit(6)} />
        <Button label='5' onClick={() => addDigit(5)} />
        <Button label='4' onClick={() => addDigit(4)} />
        <Button label='-' operation onClick={() => setOperation(`-`)} />
        <Button label='3' onClick={() => addDigit(3)} />
        <Button label='2' onClick={() => addDigit(2)} />
        <Button label='1' onClick={() => addDigit(1)} />
        <Button label='+' operation onClick={() => setOperation(`+`)} />
        <Button label='0' double onClick={() => addDigit(0)} />
        <Button label='.' onClick={() => addDigit(`.`)} />
        <Button label='=' operation onClick={() => setOperation(`=`)} />
      </ButtonsWrapper>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  overflow: scroll;
`;

const ButtonsWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  overflow: scroll;
`;