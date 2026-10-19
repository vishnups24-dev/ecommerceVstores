import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './Auth-slice/index.js'

const store = configureStore({
	reducer: {
    auth:AuthReducer
  },
});

export default store;
