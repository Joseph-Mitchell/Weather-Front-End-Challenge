import Favourite from "./Favourite.jsx";

const FavouritesList = ({ favourites, setLoadFavs }) => {


    let rows = [];
    favourites.forEach(favourite => {

        rows.push(<Favourite favourite={favourite} key={favourite.name + ", " + favourite.country} setLoadFavs={setLoadFavs} />);
    });
    return (
        <ul className="list-group list-group-flush px-3">
            {rows}
        </ul>
    );
};
export default FavouritesList;