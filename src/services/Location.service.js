import axios from "axios";

export default async function searchLocation(search) {
    try {
        const locationUrl = import.meta.env.VITE_APP_LOCATION_URL;
        const response = await axios.get(locationUrl.replace("[query]", search));
        return response.data;
    } catch (e) {
        console.log(e.message);
    }
}