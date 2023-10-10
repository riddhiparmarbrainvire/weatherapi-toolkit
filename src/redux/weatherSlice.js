import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { cityName: "", data: [] };

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (arg, { getState }) => {
    const state = getState();
    const api = "b85e1e72aab3b05793864ded202153d5";
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        state?.weather?.cityName.length === 0
          ? "Mumbai"
          : state?.weather?.cityName
      }&units=metric&appid=${api}`
    ).then(data => data.json());
    return res;
  }
);

export const weatherData = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    getCityName(state, action) {
      state.cityName = action.payload;
    }
  },
  extraReducers: {
    [getWeather.pending]: state => {
      state.loading = true;
    },
    [getWeather.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getWeather.rejected]: state => {
      state.loading = false;
    }
  }
});

export const { getCityName } = weatherData.actions;
export default weatherData.reducer;
