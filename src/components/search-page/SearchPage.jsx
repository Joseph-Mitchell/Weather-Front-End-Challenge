const SearchPage = () => {
    return (
        <div className="container-fluid page text-light d-flex align-items-center justify-content-center">
            <form className="text-center" action="/search/test">
                <h1 className="m-0">Tell me about...</h1>
                <input className="form-control p-2 my-4 fs-5" placeholder="Location name..."></input>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        </div>
    );
};
export default SearchPage;