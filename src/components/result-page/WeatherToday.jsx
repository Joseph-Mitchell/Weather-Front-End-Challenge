const WeatherToday = () => {
    return (
        <div className="row | mb-2 mt-5 mx-auto" id="weather-today">
            <p className="text-start text-md-center">
                <b>Today's Weather:</b>
                <br />
                Day, Xth Month Year
            </p>
            <div className="row">
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <img src="/assets/icons/weather-icons/10d.svg" height="80px"></img>
                </div>
                <div className="col-6 d-flex flex-column flex-md-row align-items-center justify-content-around | text-center">
                    <span>X &deg;C</span>
                    <span>Weather Desc.</span>
                </div>
            </div>
        </div>
    );
};
export default WeatherToday;