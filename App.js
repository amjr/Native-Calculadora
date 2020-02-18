import React, { useState } from 'react';
import { View } from 'react-native';
import Button from './components/Button';
import Display from './components/Display';
import styled from 'styled-components/native';



export default () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operation, setOperation] = useState(null);
  const [clearDisplay, setClearDisplay] = useState(false);
  const [values, setValues] = useState([null, null]);
  const [current, setCurrent] = useState(0);

  const addDigit = n => {
    debugger
    if (n === `.` && displayValue.includes(`.`)) {
      return
    }

    const shouldClearDisplay = displayValue === '0' || clearDisplay;
    const currentValue = shouldClearDisplay ? `` : displayValue;
    const newDisplayValue = currentValue + n;
    setDisplayValue(`${newDisplayValue}`);
    setClearDisplay(false);

    if (n !== `.`) {
      let newValuesArray = values;
      newValuesArray[current] = parseFloat(newDisplayValue);
      setValues(newValuesArray);
    }

  }

  const clearMemory = () => {
    setInitialState();
  }

  const setInitialState = () => {
    setDisplayValue('0');
    setOperation(null);
    setValues([0, 0]);
    setCurrent(0);
  }

  const changeOperation = (op) => {
    debugger
    if (op === `=`) {
      if (values[0] !== null && values[1] !== null) {
        let finalValue = 0;
        switch (operation) {
          case `/`:
            finalValue = parseFloat(values[0]) / parseFloat(values[1]);
            break;
          case `*`:
            finalValue = parseFloat(values[0]) * parseFloat(values[1]);
            break;
          case `+`:
            finalValue = parseFloat(values[0]) + parseFloat(values[1]);
            break;
          case `-`:
            finalValue = parseFloat(values[0]) - parseFloat(values[1]);
            break;
        }
        setValues([finalValue, null])
        setDisplayValue(`${finalValue}`)
        setCurrent(0);
        setOperation(null);
        setClearDisplay(false)
      }
    } else if (values[0] !== null) {
      setOperation(op);
      setCurrent(1);
      setClearDisplay(true)
    }
  }

  return (
    <Container>
      <Display value={displayValue} />
      <ButtonsWrapper>
        <Button label='AC' triple onClick={() => clearMemory()} />
        <Button label='/' operation onClick={() => changeOperation(`/`)} />
        <Button label='9' onClick={() => addDigit(9)} />
        <Button label='8' onClick={() => addDigit(8)} />
        <Button label='7' onClick={() => addDigit(7)} />
        <Button label='*' operation onClick={() => changeOperation(`*`)} />
        <Button label='6' onClick={() => addDigit(6)} />
        <Button label='5' onClick={() => addDigit(5)} />
        <Button label='4' onClick={() => addDigit(4)} />
        <Button label='-' operation onClick={() => changeOperation(`-`)} />
        <Button label='3' onClick={() => addDigit(3)} />
        <Button label='2' onClick={() => addDigit(2)} />
        <Button label='1' onClick={() => addDigit(1)} />
        <Button label='+' operation onClick={() => changeOperation(`+`)} />
        <Button label='0' double onClick={() => addDigit(0)} />
        <Button label='.' onClick={() => addDigit(`.`)} />
        <Button label='=' operation onClick={() => changeOperation(`=`)} />
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