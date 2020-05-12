import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import SearchForm from './Form';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function WeatherApp() {
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [isLoading, setLoading] = useState(false);

  async function get_weather(City) {
    setLoading(true);
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (!!data) {
          const cityList = weather.filter((city) => city.id !== data.id);
          setWeather([data, ...cityList]);
          setSearch('');
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      });
  }

  function updateSearch(event) {
    setSearch(event.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    get_weather(search);
  };

  function deleteCity(id) {
    const cityList = weather.filter((city) => city.id !== id);
    setWeather(cityList);
  }

  console.log(weather);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to HYF Weather app</h1>
      </header>

      <SearchForm
        text="Search Weather"
        getWeather={onSubmit}
        val={search}
        onChange={updateSearch}
      />

      {isLoading && <p>Loading ....</p>}
      <WeatherCard
        cityInfo={weather}
        cityDelete={deleteCity}
        thereEroror={error}
      />
    </div>
  );
}
