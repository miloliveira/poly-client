import { configureStore } from "@reduxjs/toolkit";
import isUpdatedGlobalReducer from "./isUpdatedGlobalSlice";
export default configureStore({
  reducer: {
    isUpdatedGlobal: isUpdatedGlobalReducer,
  },
});
