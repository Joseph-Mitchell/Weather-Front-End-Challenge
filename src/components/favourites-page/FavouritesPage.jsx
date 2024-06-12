import FavouritesList from "./FavouritesList.jsx";

const FavouritesPage = () => {
    return (
        <div className="container page text-light fs-5">
            <h2 className="mt-5">Telling you about...</h2>
            <h1>Favourite Locations</h1>
            <p className="text-start">
                Click <i className="bi-bookmark-star-fill text-light" /> to remove favourite location
                <br />
                Click location name to view it's forecast
            </p>
            <FavouritesList />
        </div>
    );
};
export default FavouritesPage;