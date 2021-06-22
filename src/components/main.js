import React from "react";
import "../static/css/main.css";

export const Main = (props) => (
  <div className="main">
    <div className="form">
      <form onSubmit={props.getWeatherMethod}>
        <label>Город:</label>
        <br />
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Введите название города..."
          required
        />
        <br />
        <button id="run">Получить погоду</button>
      </form>
    </div>
  </div>
);
