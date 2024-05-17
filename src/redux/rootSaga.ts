import { all } from "redux-saga/effects";
import { positionSagas } from "./positionRedux/saga";

export default function* rootSaga() {
  yield all([
    positionSagas(),
    // Add other sagas here
  ]);
}