import React, { useState } from "react";
import "./styles.css";

import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Weather } from "./components/weather";

export default function App() {
  //
  const [icon, setIcon] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [localtime, setLocaltime] = useState("");
  const [timezone, setTimezone] = useState("");
  const [temperature, setTemperature] = useState("");
  const [visibility, setVisibility] = useState("");
  const [winddirection, setWinddirection] = useState("");
  const [windspeed, setWindspeed] = useState("");
  //
  const getWeather = async (event) => {
    event.preventDefault();
    const api_key = "b13b682dcaef47f399e00332210502";
    const api_city = event.target.elements.city.value;
    if (api_city.trim() === "") {
      alert("вы не указали название города!");
    } else {
      let api_data = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${api_city}&aqi=no`
      );
      if (api_data.statuc === 400) {
        alert("Города с таким названием не существует!");
      } else {
        let api_json = await api_data.json();
        console.log(api_json);
        setIcon(api_json.current.condition.icon);
        setCountry(api_json.location.country);
        setCity(api_json.location.name);
        setLocaltime(api_json.location.localtime);
        setTimezone(api_json.location.tz_id);
        setTemperature(api_json.current.temp_c);
        setVisibility(api_json.current.vis_km);
        setWinddirection(api_json.current.wind_dir);
        setWindspeed(api_json.current.wind_kph);
      }
    }
  };
  //
  return (
    <div className="App">
      <Header />
      <Main getWeatherMethod={getWeather} />
      <Weather
        icon={icon}
        country={country}
        city={city}
        localtime={localtime}
        timezone={timezone}
        temperature={temperature}
        visibility={visibility}
        winddirection={winddirection}
        windspeed={windspeed}
      />
      <Footer />
    </div>
  );
}
