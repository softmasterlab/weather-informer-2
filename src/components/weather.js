import React from "react";
import "../static/css/weather.css";

export const Weather = (props) => (
  <div className="weather">
    <h3>Информация о текущей погоде</h3>
    <hr />
    {props.city && (
      <div className="data-list">
        <img src={props.icon} alt="..." />
        <table border="1">
          <thead>
            <tr>
              <th>№</th>
              <th>Параметр</th>
              <th>Значение</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Country</td>
              <td>{props.country}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>City</td>
              <td>{props.city}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>LocalTime</td>
              <td>{props.localtime}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Timezone</td>
              <td>{props.timezone}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Temperature</td>
              <td>{props.temperature}&deg;C</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Visibility</td>
              <td>{props.visibility}км</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Wind-Direction</td>
              <td>{props.winddirection}</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Wind-Speed</td>
              <td>{props.windspeed}км/ч</td>
            </tr>
          </tbody>
        </table>
      </div>
    )}
  </div>
);
