import React from 'react';
import { Text, Dimensions, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';

export default (props) => {
    return (
        <TouchableHighlight onPress={props.onClick}>
            <ButtonWrapp operation={props.operation} double={props.double} triple={props.triple}>
                <Button operation={props.operation}>
                    {props.label}
                </Button>
            </ButtonWrapp>
        </TouchableHighlight>
    )
}

const ButtonWrapp = styled.View`
    height: ${Dimensions.get(`window`).width / 4};
    background-color: #f0f0f0;
    border: 1px solid #bbb;
    align-items: center;
    justify-content: center;

    ${props => props.operation &&
        `background-color: #fab231;`
    }

    ${props => props.double ?
        `width: ${(Dimensions.get(`window`).width / 4) * 2} !important;`
        :
        props => props.triple === true ?
            `width: ${(Dimensions.get(`window`).width / 4) * 3} !important;`
            :
            `width: ${Dimensions.get(`window`).width / 4};`
    }
`;

const Button = styled.Text`
    font-size: 30px;
    ${props => props.operation &&
        `color: #fff;`
    }
`;