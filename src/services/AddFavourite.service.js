import axios from "axios";

export default async function addFavourite(token, favourite) {    
    try {
        const apiUrl = import.meta.env.VITE_APP_API_HOST;
        const response = await axios({
            method: "put",
            url: apiUrl + "/favourites/add",
            data: {
                "x-access-token": token,
                favourite: favourite
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