import { getWeather } from "./redux/weatherSlice";
import { getCityName } from "./redux/weatherSlice";
import Card from "./Card";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [searchInput, setSearchInput] = useState("mumbai");
  const dispatch = useDispatch();
  const dataNew = useSelector(state => state?.weather?.data);

  const handleChange = e => {
    setSearchInput(e.target.value);
    dispatch(getCityName(e.target.value));
  };

  useEffect(() => {
    dispatch(getWeather(searchInput));
  }, [dispatch]);

  return (
    <>
      <div className="search-button-div">
        <input
          placeholder="search here"
          className="weather-search-input"
          type="text"
          onChange={handleChange}
          value={searchInput}
        />
        <button
          onClick={() => {
            dispatch(getWeather());
            setSearchInput("");
          }}
          className="search-button"
        >
          Get weather
        </button>
      </div>

      <Card apiData={dataNew} />
    </>
  );
}

export default App;
