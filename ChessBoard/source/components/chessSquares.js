import React from 'react';
import ChessGrid from "./chessGrid"

export default ChessSquares = ({arrOfAvatars}) => {
    const allSquares = [];
    if (arrOfAvatars != undefined) {
      arrOfAvatars.map((avatar, index) => {
        allSquares.push(
          <ChessGrid key={index} position={index} chessAvatar={avatar} />,
        );
      });
    } else {
      allSquares.push(<View key={1} />);
    }
    return allSquares;
};