import weather from "../../assets/icons/cloud-drizzle.svg";

const WeatherToday = () => {
    return (
        <div className="container text-start">
            <p>
                <b>Today's Weather:</b>
                <br />
                Day, Xth Month Year
            </p>
            <div className="row">
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <img src={weather} height="50px"></img>
                </div>
                <div className="col-6 ">
                    <p className="d-flex justify-content-center">X &deg;C</p><br />
                    <p className="d-flex justify-content-center">Weather Desc.</p>
                </div>
            </div>
        </div>
    );
};
export default WeatherToday;