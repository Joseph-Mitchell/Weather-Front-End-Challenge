import axios from "axios";

export default async function searchWeather(lat, lon) {
    try {
        const locationUrl = import.meta.env.VITE_APP_WEATHER_URL;
        const response = await axios.get(locationUrl.replace("[lat]", lat).replace("[lon]", lon));
        return response.data;
    } catch (e) {
        console.log(e.message);
    }
}