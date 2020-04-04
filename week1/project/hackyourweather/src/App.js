import React from 'react';
import './App.css';
import Weather from './Components/WeatherCard';
import CityWeather from './City-weather.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      json: CityWeather,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to HYF Weather app</h1>
        </header>

        <div className="container">
          {this.state.json.map((data) => (
            <Weather
              key={data.id}
              city={data.name}
              country={data.sys.country}
              temp={data.main.temp}
              temp_min={data.main.temp_min}
              temp_max={data.main.temp_max}
              main={data.weather[0].main}
              discription={data.weather[0].description}
              lon={data.coord.lon}
              lat={data.coord.lat}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
