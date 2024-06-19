import axios from "axios";

export default async function searchLocation(search) {
    if (search.length === 0 || /[^A-z\s\d][\\\^]?/g.test(search)) return [];
    
    try {
        const locationUrl = import.meta.env.VITE_APP_LOCATION_URL;
        const response = await axios.get(locationUrl.replace("[query]", search));
        return response.data;
    } catch (e) {
        console.log(e.message);
        return [];
    }
}