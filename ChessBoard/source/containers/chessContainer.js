import React from 'react';
import {View, StyleSheet} from 'react-native';
import AvatarPosition from '../components/avatarPosition';
import {HORIZONTAL_ROWS, VERTICAL_ROWS, POSITION} from '../utils/constants';
import {useSelector} from 'react-redux';
import ActionsView from '../components/actionsView';
import ChessSquares from '../components/chessSquares';

const ChessContainer = () => {

  const {avatarPositions} = useSelector((state) => {
    return state.chessDetails;
  });

  return (
    <View style={styles.container}>
      <AvatarPosition position={POSITION.TOP} labels={HORIZONTAL_ROWS} />
      <View style={styles.subContainer}>
        <AvatarPosition position={POSITION.LEFT} labels={VERTICAL_ROWS} />
        <View style={styles.board}>
          <ChessSquares arrOfAvatars={avatarPositions} />
        </View>
        <AvatarPosition position={POSITION.RIGHT} labels={VERTICAL_ROWS} />
      </View>
      <AvatarPosition position={POSITION.BOTTOM} labels={HORIZONTAL_ROWS} />
      <ActionsView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  subContainer: {
    flexDirection: 'row',
  },
  board: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default ChessContainer;
