import WeatherToday from "./WeatherToday.jsx";

const ResultPage = () => {
    return (
        <div className="container pt-1 text-center">
            <h1>Telling you about...</h1>
            <h1>Place name</h1>
            <p><small>Click to add to favourites</small></p>
            <WeatherToday />
        </div>
    );
};
export default ResultPage;