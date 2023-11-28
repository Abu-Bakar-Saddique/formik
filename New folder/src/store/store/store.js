import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slice/UserSlice"; 
const store = configureStore({
    reducer: {
      users: userSlice, // Use the reducer, not the slice
    },
  });
export default store;