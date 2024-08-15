import React from 'react'
import { getDay, getWeatherIcon } from '../helper'

function Day({day}) {
  return (
    <div className='day'>
        <h3 className="day__name">{getDay(day.dt, 'weekday')}</h3>
        <p className="day__number">{getDay(day.dt, 'day')} {getDay(day.dt, 'month')}</p>
        <img src={getWeatherIcon(day.weather[0].main)} className='day__img'/>
        <p className="day__temp-data">{Math.round(day.temp.day) > 0 ? `+${Math.round(day.temp.day)}` : Math.round(day.temp.day)}°</p>
        <p className="day__temp-night">{Math.round(day.temp.night) > 0 ? `+${Math.round(day.temp.night)}` : Math.round(day.temp.night)}°</p>
        <p className="day__descer">{day.weather[0].description}</p>

    </div>
  )
}

export default Day