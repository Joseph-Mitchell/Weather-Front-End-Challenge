const SearchPage = () => {
    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center text-center">
            <div>
                <h1 className="d-block align-bottom">Tell me about...</h1>
                <form className="d-block">
                    <input placeholder="Location name..."></input>
                    <br />
                    <button>Search</button>
                </form>
            </div>
        </div>
    );
};
export default SearchPage;