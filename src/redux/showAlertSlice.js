import { createSlice } from "@reduxjs/toolkit";

export const alertOnscreenSlice = createSlice({
  name: "alertOnScreen",
  initialState: {
    showAlertOnScreen: { value: false },
    alertSettings: {
      severity: "error",
      message: "you shared this post already",
    },
  },
  reducers: {
    showAlert: (state) => {
      state.showAlertOnScreen.value = true;
    },
    hideAlert: (state) => {
      state.showAlertOnScreen.value = false;
    },
    defineAlertSettings: (state, action) => {
      state.alertSettings = action.payload;
    },
  },
});
export const { showAlert, hideAlert, defineAlertSettings } =
  alertOnscreenSlice.actions;
export default alertOnscreenSlice.reducer;
