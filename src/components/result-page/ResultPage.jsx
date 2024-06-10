import WeatherCard from "./WeatherCard.jsx";
import WeatherToday from "./WeatherToday.jsx";

const ResultPage = () => {
    return (
        <div className="container h-100 pt-1 text-center">
            <h1>Telling you about...</h1>
            <h1>Place name</h1>
            <p><small>Click to add to favourites</small></p>
            <WeatherToday />
            <div className="row">
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
            </div>
        </div>
    );
};
export default ResultPage;