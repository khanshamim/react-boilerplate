import { configureStore } from "@reduxjs/toolkit";
import { sampleReducer } from "./reducer/sampleReducer";

const store = configureStore({
  reducer: {
    state: sampleReducer.reducer,
  },
});

export default store;
