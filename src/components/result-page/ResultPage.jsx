import WeatherCard from "./WeatherCard.jsx";
import WeatherToday from "./WeatherToday.jsx";

const ResultPage = () => {
    return (
        <>
            <h2 className="mt-5">Telling you about...</h2>
            <h1>Place name</h1>
            <a className="icon-link | link-light link-underline link-underline-opacity-0" href="">
                <i className="bi-bookmark-star text-light" /> Click to add to favourites
            </a>
            <br />
            <a className="icon-link | link-light link-underline link-underline-opacity-0" href="">
                <i className="bi-bookmark-star-fill text-light" /> Click to remove from favourites
            </a>
            <WeatherToday />
            <hr />
            <div className="row row-cols-2 row-cols-md-4 | mx-auto" id="weather-cards">
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
            </div>
        </>
    );
};
export default ResultPage;