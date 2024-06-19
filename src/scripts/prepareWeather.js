const daySuffix = (number) => {
    let suffix;
    if (number > 3 && number < 21) suffix = "th";
    switch (number % 10) {
        case 1:
            suffix =  "st";
        case 2:
            suffix =  "nd";
        case 3:
            suffix =  "rd";
        default:
            suffix =  "th";
    }
    
    return number + suffix;
};

function prepareDate(newDate) {  
    return {
        weekDay: newDate.toLocaleString(navigator.language, { weekday: "long" }),
        day: daySuffix(newDate.toLocaleString(navigator.language, { day: "numeric" })),
        month: newDate.toLocaleString(navigator.language, { month: "long" }),
        year: newDate.toLocaleString(navigator.language, { year: "numeric" })
    }
}

export default function prepareWeather(weather) {
    return {
        date: prepareDate(new Date(weather.dt * 1000)),
        icon: weather.weather[0].icon,
        temp: weather.main.temp,
        desc: weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)
    };
}