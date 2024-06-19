import FavouritesList from "./FavouritesList.jsx";

const FavouritesListLayout = ({ favourites, setLoadFavs }) => {

    return (
        <div className="fs-5">
            <div className="row row-cols-3 | px-3 | d-none d-lg-flex | justify-content-center">
                <FavouritesList setLoadFavs={setLoadFavs} favourites={favourites.slice(0, favourites.length / 3)} />
                <FavouritesList setLoadFavs={setLoadFavs} favourites={favourites.slice(favourites.length / 3, (favourites.length / 3) * 2)} />
                <FavouritesList setLoadFavs={setLoadFavs} favourites={favourites.slice((favourites.length / 3) * 2, favourites.length)} />
            </div>
            <div className="row row-cols-2 | px-3 | d-none d-md-flex d-lg-none | justify-content-center">
                <FavouritesList setLoadFavs={setLoadFavs} favourites={favourites.slice(0, favourites.length / 2)} />
                <FavouritesList setLoadFavs={setLoadFavs} favourites={favourites.slice(favourites.length / 2, favourites.length)} />
            </div>
            <div className="row row-cols-1 | px-3 | d-flex d-md-none | justify-content-center">
                <FavouritesList setLoadFavs={setLoadFavs} favourites={favourites} />
            </div>
        </div>
    );
};
export default FavouritesListLayout;