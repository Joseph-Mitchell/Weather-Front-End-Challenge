import axios from "axios";

const locationUrl = import.meta.env.VITE_APP_LOCATION_URL;

export default async function searchLocation(search) {
    return await axios.get(locationUrl);
}
