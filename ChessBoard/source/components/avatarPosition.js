import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {
    POSITION,
    PADDING
} from "../utils/constants";

const { width } = Dimensions.get('window');

const AvatarPosition = (props) => {

    const { position, labels } = props
    const gridSize = (width - PADDING * 2) / 8

    let flexDirection = 'row';
    let height = gridSize;
    let gridWidth = PADDING;
    let marginLeft = 0;

    switch (position) {
        case POSITION.LEFT:
            flexDirection = 'column';
            height = gridSize;
            gridWidth = PADDING;
            break;
        case POSITION.TOP:
            flexDirection = 'row';
            height = PADDING;
            gridWidth = gridSize;
            marginLeft = PADDING;
            break;
        case POSITION.RIGHT:
            flexDirection = 'column';
            height = gridSize;
            gridWidth = PADDING;
            break;
        case POSITION.BOTTOM:
            flexDirection = 'row';
            height = PADDING;
            gridWidth = gridSize;
            marginLeft = PADDING;
            break;
    }

    return (
        <View style={{
            flexDirection: flexDirection,
            backgroundColor: 'black',
            paddingLeft: marginLeft
        }}>
            {labels.map((label,index) => {
                return <View key={index} style={{
                    height: height,
                    width: gridWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontWeight: '500',
                        color: 'white',
                    }}>{label}</Text>
                </View>
            })}
        </View>
    );
}

export default AvatarPosition;