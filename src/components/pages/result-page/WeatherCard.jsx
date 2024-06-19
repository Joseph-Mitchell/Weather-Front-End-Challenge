import prepareWeather from "../../../scripts/prepareWeather.js";

const WeatherCard = ({ weather = { dt: 0, main: { temp: 0 }, weather: [{ icon: "", description: "" }] } }) => {

    const data = prepareWeather(weather);

    return (
        <div className="p-2">
            <div className="card | border-3 rounded-5 border-light | bg-light bg-opacity-25 | text-light">
                <div className="card-title mb-0">{data.date.weekDay}</div>
                <img src={"/assets/weather-icons/" + data.icon + ".svg"} height="80px"></img>
                <div>
                    {data.temp} &deg;C
                    <br />
                    {data.desc}
                </div>
            </div>
        </div>
    );
};
export default WeatherCard;