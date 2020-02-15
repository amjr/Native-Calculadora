import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';

export default (props) => {
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Button>
                {props.label}
            </Button>
        </TouchableHighlight>
    )
}

const Button = styled.Text`
    font-size: 20px;
    height: ${Dimensions.get(`window`).height / 6};
    width: ${Dimensions.get(`window`).width / 4};
    padding: 20px;
    background-color: #f0f0f0;
    text-align: center;
    border-width: 1px;
    border-color: #bbb;
`;
