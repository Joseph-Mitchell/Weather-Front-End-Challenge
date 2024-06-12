import FavouritesList from "./FavouritesList.jsx";

const FavouritesListLayout = () => {
    return (
        <div className="fs-5">
            <div className="row row-cols-3 | px-3 | d-none d-lg-flex | justify-content-center">
                <FavouritesList />
                <FavouritesList />
                <FavouritesList />
            </div>
            <div className="row row-cols-2 | px-3 | d-none d-md-flex d-lg-none | justify-content-center">
                <FavouritesList />
                <FavouritesList />
            </div>
            <div className="row row-cols-1 | px-3 | d-flex d-md-none | justify-content-center">
                <FavouritesList />
            </div>
        </div>
    );
};
export default FavouritesListLayout;