import { createSlice } from "@reduxjs/toolkit";

export const isUpdatedGlobalSlice = createSlice({
  name: "isUpdatedGlobal",
  initialState: {
    value: false,
  },
  reducers: {
    isUpdatedTrue: (state) => {
      state.value = true;
    },
    isUpdatedFalse: (state) => {
      state.value = false;
    },
  },
});
export const { isUpdatedFalse, isUpdatedTrue } = isUpdatedGlobalSlice.actions;
export default isUpdatedGlobalSlice.reducer;
