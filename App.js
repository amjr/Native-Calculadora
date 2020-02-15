import React from 'react';
import { View } from 'react-native';
import Button from './components/Button';
import styled from 'styled-components/native';

export default () => (
  <Container>
    <ButtonsWrapper>
      <Button label='AC' />
      <Button label='/' />
      <Button label='7' />
      <Button label='8' />
      <Button label='9' />
      <Button label='*' />
      <Button label='4' />
      <Button label='5' />
      <Button label='6' />
      <Button label='-' />
      <Button label='1' />
      <Button label='2' />
      <Button label='3' />
      <Button label='+' />
      <Button label='0' />
      <Button label='.' />
      <Button label='=' />
    </ButtonsWrapper>
  </Container>
);

const Container = styled.View`
  display: flex;
  overflow: scroll;
`;

const ButtonsWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  overflow: scroll;
`;