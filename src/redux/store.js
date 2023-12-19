// Dependencies
import { configureStore } from "@reduxjs/toolkit";
import isUpdatedGlobalReducer from "./isUpdatedGlobalSlice";
import alertOnScreenReducer from "./showAlertSlice";

// Configure the Redux store with multiple reducers
export default configureStore({
  reducer: {
    // Reducer for managing global update status
    isUpdatedGlobal: isUpdatedGlobalReducer,
    // Reducer for handling on-screen alerts
    alertOnScreen: alertOnScreenReducer,
  },
});
