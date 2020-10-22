import { combineReducers } from "@reduxjs/toolkit";

import chessDetails from "../slices/chessReducer";

const rootReducer = combineReducers({ chessDetails });

export default rootReducer;