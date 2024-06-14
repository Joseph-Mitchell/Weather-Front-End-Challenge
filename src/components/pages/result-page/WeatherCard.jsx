const WeatherCard = ({ weather = { dt: 0, main: { temp: 0 }, weather: [{ icon: "", description: "" }] } }) => {

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
        <div className="p-2">
            <div className="card | border-3 rounded-5 border-light | bg-light bg-opacity-25 | text-light">
                <div className="card-title mb-0">{weekDay}</div>
                <img src={"/assets/weather-icons/" + icon + ".svg"} height="80px"></img>
                <div>
                    {temp} &deg;C
                    <br />
                    {desc}
                </div>
            </div>
        </div>
    );
};
export default WeatherCard;