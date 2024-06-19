import prepareWeather from "../../../scripts/prepareWeather.js";

const WeatherToday = ({ weather = { dt: 0, main: { temp: 0 }, weather: [{ icon: "", description: "" }] } }) => {

    const data = prepareWeather(weather);

    return (
        <div className="row | mb-2 mt-5 mx-auto | d-flex justify-content-center" id="weather-today">
            <p className="text-start text-md-center">
                <b>Today's Weather:</b>
                <br />
                {data.date.weekDay}, {data.date.day} {data.date.month} {data.date.year}
            </p>
            <div className="row w-100">
                <div className="col-6 d-flex justify-content-end align-items-center">
                    <img src={"/assets/weather-icons/" + data.icon + ".svg"} height="80px" />
                </div>
                <div className="col-6 d-flex align-items-center justify-content-start | text-start">
                    <span>{data.temp} &deg;C <br /> {data.desc}</span>
                </div>
            </div>
        </div>
    );
};
export default WeatherToday;