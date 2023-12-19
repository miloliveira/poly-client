// Creating a slice of the global state for managing when to trigger an update
import { createSlice } from "@reduxjs/toolkit";

// Define the "isUpdatedGlobal" slice with an initial state
export const isUpdatedGlobalSlice = createSlice({
  name: "isUpdatedGlobal",
  initialState: {
    value: false,
  },
  // Define reducers to update the state based on different actions.
  reducers: {
    // Action to set the "value" to true, indicating an update has occurred
    isUpdatedTrue: (state) => {
      state.value = true;
    },
    // Action to set the "value" to false, indicating no update has occurred
    isUpdatedFalse: (state) => {
      state.value = false;
    },
  },
});
// Export action creators for the defined reducers.
export const { isUpdatedFalse, isUpdatedTrue } = isUpdatedGlobalSlice.actions;
// Export the reducer to be used in the Redux store.
export default isUpdatedGlobalSlice.reducer;
