import React, { useContext, useEffect } from "react";
import sunImg from "@i/sun.svg";
import tempImg from "@i/temp.svg";
import pressureImg from "@i/pressure.svg";
import precipitationImg from "@i/precipitation.svg";
import windImg from "@i/wind.svg";
import cloudImg from "@i/cloud.png";
import { Context } from "../context/Context";
import Loader from "./Loader";
import { getTime, getWeatherIcon } from "../helper";
function Main() {
  const { getWeather, weather,loading } = useContext(Context);
  // console.log(weather);
  useEffect(() => {
    getWeather();
  }, []);
  if(loading) return <Loader/>
  return (
    <div className="content container">
      <div className="content__left">
        <h1 className="content__title">{Math.round(weather.current.temp)}°</h1>
        <h2 className="content__today">Сегодня</h2>
        <p className="content__date">Время: {getTime(weather.timezone)}</p>
        <p className="content__city">Город: {weather.name}</p>
        <img src={getWeatherIcon(weather.current.weather[0].main)} alt="" className="content__img" />
      </div>
      <div className="content__right">
        <img src={cloudImg} alt="" className="content__right-banner" />
        <div className="content__right-item">
          <div className="content__right-img">
            <img src={tempImg} alt="" />
          </div>
          <span className="content__right-title">Температура</span>
          <span className="content__right-descr">{Math.round(weather.current.temp)}° - ощущается как {Math.round(weather.current.feels_like)}°</span>
        </div>
        <div className="content__right-item">
          <div className="content__right-img">
            <img src={pressureImg} alt="" />
          </div>
          <span className="content__right-title">Давление </span>
          <span className="content__right-descr">
            {weather.current.pressure} мм ртутного столба - нормальное
          </span>
        </div>
        <div className="content__right-item">
          <div className="content__right-img">
            <img src={precipitationImg} alt="" />
          </div>
          <span className="content__right-title">Осадки</span>
          <span className="content__right-descr">{weather.current.humidity}mm</span>
        </div>
        <div className="content__right-item">
          <div className="content__right-img">
            <img src={windImg} alt="" />
          </div>
          <span className="content__right-title">Ветер</span>
          <span className="content__right-descr">
            {weather.current.wind_speed} м/с юго-запад - легкий ветер
          </span>
        </div>
      </div>
    </div>
  );
}

export default Main;
