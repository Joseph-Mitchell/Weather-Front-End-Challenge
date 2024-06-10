import "../../assets/css/fullHeightPage.css";

const SearchPage = () => {
    return (
        <div className="container h-100 d-flex align-items-center justify-content-center">
            <form className="text-center">
                <h1>Tell me about...</h1>
                <input placeholder="Location name..."></input>
                <br />
                <button>Search</button>
            </form>
        </div>
    );
};
export default SearchPage;