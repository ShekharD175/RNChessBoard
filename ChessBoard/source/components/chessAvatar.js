import React from 'react';
import { View, Image } from 'react-native';

const ChessAvatar = (props) => {
    const { position, icon } = props
    return (
        <View style={{
            position:'absolute', 
            alignSelf: 'center'
        }}>
            <Image source={icon} key={position} style={{width: 40, height: 40}}/>
        </View>
    );
}

export default ChessAvatar;