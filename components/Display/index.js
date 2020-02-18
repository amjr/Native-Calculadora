import React from 'react';
import { Text, Dimensions, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';

export default (props) => (
    <Display>
        <DisplayValue>
            {props.value}
        </DisplayValue>
    </Display>
)

const Display = styled.View`
    justify-content: center;
    align-items: flex-end;
    background-color: rgba(0,0,0,0.6);
    padding: 32px 20px;
`;

const DisplayValue = styled.Text`
    font-size: 60px;
    color: #fff;
`;