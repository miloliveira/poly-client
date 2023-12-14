import { configureStore } from "@reduxjs/toolkit";
import isUpdatedGlobalReducer from "./isUpdatedGlobalSlice";
import alertOnScreenReducer from "./showAlertSlice";
export default configureStore({
  reducer: {
    isUpdatedGlobal: isUpdatedGlobalReducer,
    alertOnScreen: alertOnScreenReducer,
  },
});
