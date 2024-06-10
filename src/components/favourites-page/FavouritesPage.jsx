import bookmark from "../../assets/icons/bookmark-star.svg";
import unbookmark from "../../assets/icons/bookmark-star-fill.svg";
import FavouritesList from "./FavouritesList.jsx";

const FavouritesPage = () => {
    return (
        <div className="container h-100 text-center">
            <h1>Favourite Locations</h1>
            <p>Click <img src={unbookmark} /> to remove favourite location</p>
            <p>Click location name to view it's forecast</p>
            <FavouritesList />
        </div>
    );
};
export default FavouritesPage;