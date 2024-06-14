const WeatherToday = ({ weather = { dt: 0, main: { temp: 0 }, weather: [{ icon: "", description: "" }] } }) => {

    const daySuffix = (number) => {
        if (number > 3 && number < 21) return "th";
        switch (number % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };

    const date = new Date(weather.dt * 1000);
    const weekDay = date.toLocaleString(navigator.language, { weekday: "long" });
    const day = date.toLocaleString(navigator.language, { day: "numeric" });
    const month = date.toLocaleString(navigator.language, { month: "long" });
    const year = date.toLocaleString(navigator.language, { year: "numeric" });

    const icon = weather.weather[0].icon;
    const temp = weather.main.temp;
    const desc = weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1);

    return (
        <div className="row | mb-2 mt-5 mx-auto | d-flex justify-content-center" id="weather-today">
            <p className="text-start text-md-center">
                <b>Today's Weather:</b>
                <br />
                {weekDay}, {day}{daySuffix(day)} {month} {year}
            </p>
            <div className="row w-100">
                <div className="col-6 d-flex justify-content-end align-items-center">
                    <img src={"/assets/weather-icons/" + icon + ".svg"} height="80px" />
                </div>
                <div className="col-6 d-flex align-items-center justify-content-start | text-start">
                    <span>{temp} &deg;C <br /> {desc}</span>
                </div>
            </div>
        </div>
    );
};
export default WeatherToday;