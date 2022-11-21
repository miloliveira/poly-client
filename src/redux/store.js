import { configureStore } from "@reduxjs/toolkit";
import isUpdatedGlobalReducer from "./isUpdatedGlobal";
export default configureStore({
  reducer: {
    isUpdatedGlobal: isUpdatedGlobalReducer,
  },
});
