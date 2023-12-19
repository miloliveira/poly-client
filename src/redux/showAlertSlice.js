// Creating a slice of the global state for managing on-screen alerts
import { createSlice } from "@reduxjs/toolkit";

// Define the "alertOnScreen" slice with an initial state
export const alertOnscreenSlice = createSlice({
  name: "alertOnScreen",
  initialState: {
    // State to control whether to show an alert on screen
    showAlertOnScreen: { value: false },
    // State to store alert settings
    alertSettings: {
      severity: "error",
      message: "you shared this post already",
    },
  },
  // Define reducers to update the state based on different actions
  reducers: {
    // Action to show the on-screen alert
    showAlert: (state) => {
      state.showAlertOnScreen.value = true;
    },
    // Action to hide the on-screen alert
    hideAlert: (state) => {
      state.showAlertOnScreen.value = false;
    },
    // Action to define custom alert settings
    defineAlertSettings: (state, action) => {
      state.alertSettings = action.payload;
    },
  },
});

// Export action creators for the defined reducers.
export const { showAlert, hideAlert, defineAlertSettings } =
  alertOnscreenSlice.actions;
// Export the reducer to be used in the Redux store.
export default alertOnscreenSlice.reducer;
