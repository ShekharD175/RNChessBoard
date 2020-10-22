import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {makMove, updateResetButtonState} from '../slices/chessReducer';
import {getRandomMove} from '../utils/randomMoves';

const ActionsView = () => {
  const dispatch = useDispatch();

  const {isResetButtonEnabled} = useSelector((state) => {
    return state.chessDetails;
  });

  const clickedOnReset = () => {
    dispatch(updateResetButtonState(true));
  };

  const clickedOnRandom = () => {
    dispatch(updateResetButtonState(false));
    dispatch(makMove(getRandomMove()));
  };

  return (
    <View style={styles.playActionContainer}>
      <TouchableOpacity
        disabled={isResetButtonEnabled}
        onPress={(e) => clickedOnReset()}
        style={[
          styles.buttonStyle,
          {opacity: isResetButtonEnabled ? 0.3 : 1.0},
        ]}>
        <Text style={{}}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={(e) => clickedOnRandom()}
        style={styles.buttonStyle}>
        <Text>Random</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  playActionContainer: {
    width: '100%',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonStyle: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ActionsView;
