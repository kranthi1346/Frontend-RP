import { createSelector } from "reselect";
import { PositionDataState } from "./reducer"; // Assuming you have RootState defined in types

// Define selectors
const positionDataSelector = (state: any) => state?.positionDataReducer;

// Create memoized selectors using createSelector

export const selectPositionData = createSelector(
  [positionDataSelector],
  (positionData) => positionData.responseData
);

export const selectPositionDataisFetching = createSelector(
  [positionDataSelector],
  (positionData) => positionData.isFetching
);

export const selectPositionDataError = createSelector(
    [positionDataSelector],
    (positionData) => positionData.errorMessage
  );
