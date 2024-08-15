import cloudsImg from "@i/mainly_cloudy.svg";
import sunImg from "@i/sun.svg";
import rainImg from "@i/rain.svg";
import smallRainImg from "@i/small_rain.svg";
import snowImg from "@i/snow.png";

export function getWeatherIcon(condition) {
    switch (condition) {
        case "Clouds":
            return cloudsImg
        case 'Clear':
            return sunImg
        case 'Snow':
            return snowImg
        case 'Rain':
            return rainImg
        case 'Drizzle':
            return smallRainImg
    }
}
export function getTime(timezone) {
    return new Date().toLocaleString("ru-RU", {
        timeZone: timezone,
        hourCycle: 'h24',
        timeStyle: 'short',
    });
}
export function getDay(dt = 1723359600, data) {
    let millisecond = dt * 1000;
    switch (data) {
        case 'weekday':
            return new Date(millisecond).toLocaleDateString("ru-RU", {
                weekday: "long",
            })
        case 'month':
            return new Date(millisecond).toLocaleDateString("ru-RU", {
                month: "short",
            })
        case 'day':
            return new Date(millisecond).toLocaleDateString("ru-RU", {
                day: "numeric",
            })
    }
    console.log(new Data(millisecond).toLocaleDateString("ru-RU", {
        timeStyle: "short",
        weekday: "short"
    }))
}