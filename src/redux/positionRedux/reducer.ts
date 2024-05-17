import ActionTypes from '../actionTypes';

export interface PositionDataState {
  isFetching: boolean;
  errorMessage: string;
  responseData: {}; // Define the type of responseData according to your data structure
}

const initialState: PositionDataState = {
  isFetching: false,
  errorMessage: '',
  responseData: {},
};

const positionDataReducer = (state: PositionDataState = initialState, action: any): PositionDataState => {
  switch (action.type) {
    case ActionTypes.FETCH_POSITION_MASTER_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.FETCH_POSITION_MASTER_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        responseData: action.payload,
      };
    case ActionTypes.FETCH_POSITION_MASTER_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default positionDataReducer;
