import FavouritesListLayout from "./FavouritesListLayout.jsx";

const FavouritesPage = () => {
    return (
        <>
            <h2 className="mt-5">Telling you about...</h2>
            <h1>Favourite Locations</h1>
            <p className="text-start | ms-3">
                Click <i className="bi-bookmark-star-fill text-light" /> to remove favourite location
                <br />
                Click location name to view it's forecast
            </p>
            <FavouritesListLayout />
        </>
    );
};
export default FavouritesPage;