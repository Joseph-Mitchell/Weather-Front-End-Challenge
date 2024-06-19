import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import WeatherCard from "./WeatherCard.jsx";
import WeatherToday from "./WeatherToday.jsx";

import searchWeather from "../../../services/Weather.service.js";
import addFavourite from "../../../services/AddFavourite.service.js";
import removeFavourite from "../../../services/RemoveFavourite.service.js";

const ResultPage = ({ setLoadFavs, favourites, loggedIn }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [weather, setWeather] = useState({
        city: {
            name: ""
        },
        list: [],
    });

    function addFavouriteClick() {
        addFavourite(localStorage.getItem("token"), {
            name: weather.city.name,
            country: weather.city.country,
            lat: weather.city.coord.lat,
            lon: weather.city.coord.lon,
        });
        setLoadFavs(true);
    }

    function removeFavouriteClick() {
        removeFavourite(localStorage.getItem("token"), weather.city.coord.lat, weather.city.coord.lon);
        setLoadFavs(true);
    }

    async function getWeather() {
        const response = await searchWeather(searchParams.get("lat"), searchParams.get("lon"));
        const weatherList = response.list.filter((item) => item.dt_txt.includes("12:00:00"));
        response.list = weatherList;

        setWeather(response);
    };

    function isFavourite() {
        let fav = false;
        favourites.forEach((favourite) => {
            if (favourite.name === weather.city.name && favourite.country === weather.city.country) {
                fav = true;
            }
        });
        return fav;
    }

    const favouriteButton = isFavourite() ? (isFavourite() && (
        <a className="icon-link | link-light link-underline link-underline-opacity-0" type="button" onClick={removeFavouriteClick}>
            <i className="bi-bookmark-star-fill text-light" /> Click to remove from favourites
        </a>
    )) : (
        <a className="icon-link | link-light link-underline link-underline-opacity-0" type="button" onClick={addFavouriteClick}>
            <i className="bi-bookmark-star text-light" /> Click to add to favourites
        </a>
    );

    useEffect(() => {
        getWeather();
    }, [searchParams]);

    return (
        <>
            <h2 className="mt-5">Telling you about...</h2>
            <h1>{weather.city.name}</h1>
            {loggedIn && favouriteButton}
            <WeatherToday weather={weather.list[0]} />
            <hr />
            <div className="row row-cols-2 row-cols-md-4 | mx-auto" id="weather-cards">
                <WeatherCard weather={weather.list[1]} />
                <WeatherCard weather={weather.list[2]} />
                <WeatherCard weather={weather.list[3]} />
                <WeatherCard weather={weather.list[4]} />
            </div>
        </>
    );
};
export default ResultPage;