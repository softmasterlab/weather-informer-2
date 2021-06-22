import React from "react";
import "../static/css/header.css";

export const Header = () => (
  <div className="header">
    <h2>Погодный информер</h2>
    <h3>Получение прогноза погоды по городам мира</h3>
    <h4 style={{color: 'darkcyan'}}>(Автоматическое обновление версий!!!)</h4>
    <hr />
  </div>
);
