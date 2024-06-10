import weather from "../../assets/icons/cloud-drizzle.svg";

const WeatherCard = () => {
    return (
        <div className="col-6 p-2">
            <div className="card rounded-5">
                <div className="card-title">Next Day Name</div>
                <img src={weather} height="80px"></img>
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