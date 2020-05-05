import React from 'react';
import './App.css';
import WeatherCard from './Components/WeatherCard';
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
            <WeatherCard {...data} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
