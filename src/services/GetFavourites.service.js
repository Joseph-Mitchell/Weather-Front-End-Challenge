import axios from "axios";

export default async function getFavourites(token) {    
    if (!token) return [];
    try {        
        const apiUrl = import.meta.env.VITE_APP_API_HOST;
        const response = await axios({
            method: "post",
            url: apiUrl + "/favourites",
            data: {
                "x-access-token": token,
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