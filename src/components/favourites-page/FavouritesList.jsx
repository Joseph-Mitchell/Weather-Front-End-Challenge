import Favourite from "./Favourite.jsx";

const FavouritesList = () => {
    return (
        <>
            <div className="row row-cols-3 | d-none d-lg-flex | justify-content-center">
                <ul className="list-group list-group-flush">
                    <Favourite />
                    <Favourite />
                    <Favourite />
                </ul>
                <ul className="list-group list-group-flush">
                    <Favourite />
                    <Favourite />
                    <Favourite />
                </ul>
                <ul className="list-group list-group-flush">
                    <Favourite />
                    <Favourite />
                    <Favourite />
                </ul>
            </div>
            <div className="row row-cols-2 | d-none d-md-flex d-lg-none | justify-content-center">
                <ul className="list-group list-group-flush">
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                </ul>
                <ul className="list-group list-group-flush">
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                </ul>
            </div>
            <div className="row row-cols-1 | d-flex d-md-none | justify-content-center">
                <ul className="list-group list-group-flush">
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                    <Favourite />
                </ul>
            </div>
        </>
    );
};
export default FavouritesList;