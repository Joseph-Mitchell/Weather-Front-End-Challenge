const WeatherCard = () => {
    return (
        <div className="p-2">
            <div className="card | border-3 rounded-5 border-light | bg-light bg-opacity-25 | text-light">
                <div className="card-title">Next Day Name</div>
                <img src="/assets/weather-icons/10d.svg" height="80px"></img>
                <div>
                    X &deg;C
                    <br />
                    Weather Desc
                </div>
            </div>
        </div>
    );
};
export default WeatherCard;