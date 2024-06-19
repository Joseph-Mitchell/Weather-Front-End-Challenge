import axios from "axios";

export default async function removeFavourite(token, lat, lon) {    
    try {
        const apiUrl = import.meta.env.VITE_APP_API_HOST;
        const response = await axios({
            method: "put",
            url: apiUrl + "/favourites/remove",
            data: {
                "x-access-token": token,
                lat: lat,
                lon: lon
            }
        });
        return response.data;
    } catch (e) {
        if (e.response.data) {
            if (e.response.data.errors)
                return { message: e.response.data.errors[0].msg };
            else
                return { message: e.response.data.message };
        }
        else
            return { message: "Sorry, something went wrong, please try again later." };
    }
}