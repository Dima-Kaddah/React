import React from 'react';

const WeatherCard = (props) => {
  return (
    <div className="card" key={props.id}>
      <h2>
        {props.name},{props.sys.country}
      </h2>
      <h2 className="temp"> {Celsius(props.main.temp)}&deg;</h2>
      {minmaxTemp(Celsius(props.main.temp_min), Celsius(props.main.temp_max))}
      {discrMain(props.weather[0].main, props.weather[0].discription)}
      {location(props.coord.lon, props.coord.lat)}
    </div>
  );
};

function minmaxTemp(min, max) {
  return (
    <h3>
      <span className="minmax">min temp: {min}&deg;</span>
      <span className="minmax">max temp: {max}&deg;</span>
    </h3>
  );
}
function discrMain(main, discription) {
  return (
    <h2>
      <span className="discrMain">{main}</span>
      <span className="discrMain dis">{discription}</span>
    </h2>
  );
}

function location(lon, lat) {
  return (
    <h4>
      <span>location:</span>
      <span className="lonLat">
        {lon},{lat}
      </span>
    </h4>
  );
}

function Celsius(temp) {
  let cels = Math.floor(temp - 273.15);
  return cels;
}

export default WeatherCard;
