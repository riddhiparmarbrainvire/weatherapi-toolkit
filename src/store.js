import devToolsEnhancer from "remote-redux-devtools";
import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./redux/weatherSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    enhancers: [devToolsEnhancer({ realtime: true, port: 3000 })]
  }
});
export default store;
