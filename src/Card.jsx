import "./App.css";

function Card({ apiData }) {
  const date = new Date();
  const time = date.toDateString();
  const hours = date.getHours();
  const mins = date.getMinutes();

  return (
    <>
      {apiData.cod === "404" ? (
        <div className="card-div">
          <div className="weather-card">
            <h1 className="center-class">OOPS!</h1>
            <h2 className="center-class">No city found</h2>
          </div>
        </div>
      ) : (
        <div className="card-div">
          <div className="weather-card">
            <span className="center-class">
              {time} {hours > 12 ? hours - 12 : hours}:{mins}
              {hours > 12 ? "AM" : "PM"}
            </span>
            <h1 className="center-class">{apiData?.main?.temp}</h1>
            <h2 className="center-class">{apiData?.name}</h2>
            <span className="center-class">
              Humidity : {apiData?.main?.humidity}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
