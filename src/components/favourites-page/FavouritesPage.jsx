import FavouritesList from "./FavouritesList.jsx";

const FavouritesPage = () => {
    return (
        <div className="container page">
            <h1>Favourite Locations</h1>
            <p>Click <img src="/assets/icons/favourite-icons/bookmark-star-fill.svg" /> to remove favourite location</p>
            <p>Click location name to view it's forecast</p>
            <FavouritesList />
        </div>
    );
};
export default FavouritesPage;