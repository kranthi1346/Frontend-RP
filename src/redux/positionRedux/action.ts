"use client"
import ActionTypes from "../actionTypes";

export const fetchMasterDataStart = () => ({
  type: ActionTypes.FETCH_POSITION_MASTER_DATA_START,
});

export const fetchMasterDataFail = (payload: any) => ({
  type: ActionTypes.FETCH_POSITION_MASTER_DATA_FAIL,
  payload,
});

export const fetchMasterDataSuccess = (payload: any) => ({
  type: ActionTypes.FETCH_POSITION_MASTER_DATA_SUCCESS,
  payload,
});
