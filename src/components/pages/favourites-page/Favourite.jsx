import { useNavigate } from "react-router-dom";
import removeFavourite from "../../../services/RemoveFavourite.service.js";

const Favourite = ({ favourite, setLoadFavs }) => {
    const navigate = useNavigate();

    function removeFavouriteClick() {
        removeFavourite(localStorage.getItem("token"), favourite.lat, favourite.lon);
        setLoadFavs(true);
    }

    function navToFav() {
        navigate("/search?lat=" + favourite.lat + "&lon=" + favourite.lon);
    }

    return (
        <li className="list-group-item | bg-transparent">
            <a className="btn me-3" onClick={removeFavouriteClick}><i className="bi-bookmark-star-fill text-light" /></a>
            <a className="btn link-light link-underline link-offset-1 link-underline-opacity-0 link-underline-opacity-100-hover" onClick={navToFav}>{favourite.name}, {favourite.country}</a>
        </li>
    );
};
export default Favourite;