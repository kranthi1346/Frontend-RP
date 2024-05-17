import { getPositionMasterData } from "../../services/service";
import ActionTypes from "../actionTypes";
import { fetchMasterDataFail, fetchMasterDataSuccess } from "./action";
import * as Effects from "redux-saga/effects";

const call: any = Effects.call;
const put: any = Effects.put;
const all: any = Effects.all;
const takeLatest: any = Effects.takeLatest;

export function* positionMasterDataFetch(): Generator<any, void, void> {
  try {
    const response: any = yield call(getPositionMasterData);
    if (response?.statusCode == 200) {
      yield put(fetchMasterDataSuccess(response?.data));
    } else {
      yield put(fetchMasterDataFail(response?.errorMessage));
    }
  } catch (error) {
    yield put(fetchMasterDataFail(error));
  }
}

export function* positionMasterDataFetchStart() {
  yield takeLatest(
    ActionTypes.FETCH_POSITION_MASTER_DATA_START,
    positionMasterDataFetch
  );
}

export function* positionSagas() {
  yield all([call(positionMasterDataFetchStart)]);
}
