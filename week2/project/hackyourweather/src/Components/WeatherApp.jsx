import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import SearchForm from './Form';
import 'weather-icons/css/weather-icons.css';
import SunnyDay from '../weatherBackgrounds/Sunny.jpg';
import SnowDay from '../weatherBackgrounds/snow.jpg';
import StormDay from '../weatherBackgrounds/storm.jpg';
import FogDay from '../weatherBackgrounds/fog.jpg';
import RainDay from '../weatherBackgrounds/Rain.jpg';
import CloudyDay from '../weatherBackgrounds/Clouds.jpg';
import ClearDay from '../weatherBackgrounds/clear.jpg';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function WeatherApp() {
  const [Weather, setWeather] = useState({
    error: false,
    search: '',
  });
  const [isLoading, setLoading] = useState(false);
  const [weatherBackground, setWeatherBackground] = useState({ img: '' });
  const [weatherIcons, setWeatherIcons] = useState({ icon: '' });

  async function get_weather(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.city.value;

    if (city || country) {
      setLoading(true);
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`,
      )
        .then((res) => res.json())
        .then((data) => {
          if (!!data) {
            setWeather({
              city: `${data.name},${data.sys.country}`,
              temp: data.main.temp,
              temp_min: data.main.temp_min,
              temp_max: data.main.temp_max,
              main: data.weather[0].main,
              discription: data.weather[0].discription,
              lon: data.coord.lon,
              lat: data.coord.lat,
              error: false,
              search: '',
            });
            setLoading(false);
            get_backgroundAndIcons(
              weatherBackground,
              weatherIcons,
              data.weather[0].id,
            );
          } else {
            setWeather({
              data: undefined,
              city: undefined,
              country: undefined,
              temp: undefined,
              temp_min: undefined,
              temp_max: undefined,
              main: undefined,
              discription: undefined,
              lon: undefined,
              lat: undefined,
              error: true,
            });
            setWeatherBackground({ img: undefined });
            setWeatherIcons({ icon: undefined });
            setLoading(false);
          }
        });
    }
  }

  function updateSearch(event) {
    setWeather({ search: event.target.value.substr(0, 30) });
    setWeatherBackground({ img: undefined });
    setWeatherIcons({ icon: undefined });
  }

  function get_backgroundAndIcons(backgrounds, icons, iconID) {
    if (iconID) {
      if (iconID >= 200 && iconID <= 232) {
        setWeatherBackground({
          img: `${StormDay}`,
        });
        setWeatherIcons({ icon: 'wi-thunderstorm' });
      } else if (iconID >= 300 && iconID <= 321) {
        setWeatherBackground({
          img: `${ClearDay}`,
        });
        setWeatherIcons({ icon: 'wi-sleet' });
      } else if (iconID >= 500 && iconID <= 531) {
        setWeatherBackground({
          img: `${RainDay}`,
        });
        setWeatherIcons({ icon: 'wi-storm-showers' });
      } else if (iconID >= 600 && iconID <= 622) {
        setWeatherBackground({
          img: `${SnowDay}`,
        });
        setWeatherIcons({ icon: 'wi-snow' });
      } else if (iconID >= 701 && iconID <= 781) {
        setWeatherBackground({
          img: `${FogDay}`,
        });
        setWeatherIcons({ icon: 'wi-fog' });
      } else if (iconID === 800) {
        setWeatherBackground({
          img: `${SunnyDay}`,
        });
        setWeatherIcons({ icon: 'wi-day-sunny' });
      } else if (iconID >= 801 && iconID <= 804) {
        setWeatherBackground({
          img: `${CloudyDay}`,
        });
        setWeatherIcons({ icon: 'wi-day-fog' });
      } else {
        setWeatherBackground({
          img: `${SunnyDay}`,
        });
        setWeatherIcons({ icon: 'wi-day-sunny' });
      }
    } else {
      setWeatherBackground({
        img: '',
      });
      setWeatherIcons({ icon: '' });
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to HYF Weather app</h1>
      </header>
      <SearchForm
        text="Search Weather"
        getWeather={get_weather}
        val={Weather.search}
        change={updateSearch.bind(this)}
      />
      {isLoading && <p>Loading ....</p>}
      {isLoading && !Weather ? (
        <div>Loading...</div>
      ) : (
        <WeatherCard
          key={Weather.id}
          city={Weather.city}
          country={Weather.country}
          WIcons={weatherIcons.icon}
          temp={Weather.temp}
          temp_min={Weather.temp_min}
          temp_max={Weather.temp_max}
          main={Weather.main}
          discription={Weather.description}
          lon={Weather.lon}
          lat={Weather.lat}
          error={Weather.error}
          WBackground={weatherBackground.img}
        />
      )}
    </div>
  );
}
