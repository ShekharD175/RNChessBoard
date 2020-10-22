import {createSlice} from '@reduxjs/toolkit';
import {chessInitialState} from './chessInitialState';

export const chessDetails = createSlice({
  name: 'chessDetails',
  initialState: chessInitialState,
  reducers: {
    updateResetButtonState: updateResetButtonState,
    makMove: makMove
  },
});

function updateResetButtonState(state, action) {
  state.isResetButtonEnabled = action.payload;
  state.avatarPositions = [...chessInitialState.avatarPositions]
};

function makMove(state, action) {
  state.avatarPositions = action.payload
};
