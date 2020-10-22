import { chessDetails } from "./chessSlice";

export const {
    updateResetButtonState,
    makMove
} = chessDetails.actions;

export default chessDetails.reducer;