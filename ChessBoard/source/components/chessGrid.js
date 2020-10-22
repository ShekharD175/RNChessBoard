import React  from 'react';
import { View, Dimensions } from 'react-native';
import ChessAvatar from './chessAvatar';
import {
    NUMBER_OF_ROWS,
    PADDING
} from "../utils/constants";

const { width } = Dimensions.get('window');
const ChessGrid = (props) => {  
        const { position, chessAvatar } = props
        const gridSize = (width - PADDING*2) / NUMBER_OF_ROWS

        const isWhite = Math.floor(position / 8) + position % 8;
        let color = 'gray'
        if ( isWhite % 2 == 0) {
            color = 'white'
        } 

        return (
            <View>
                <View key={position} style={{
                    backgroundColor: color, 
                    width: gridSize, 
                    height: gridSize
                }}/>
                <ChessAvatar icon={chessAvatar}/>
            </View>
        );
}

export default ChessGrid;
