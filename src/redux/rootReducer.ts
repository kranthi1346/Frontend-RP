import { combineReducers } from "@reduxjs/toolkit";
import positionDataReducer from "./positionRedux/reducer";

const rootReducer = combineReducers({
    positionDataReducer
});

export default rootReducer;
