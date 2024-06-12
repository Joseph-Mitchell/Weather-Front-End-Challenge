const SearchPage = () => {

    const submitSearch = e => {
        e.preventDefault();

    };

    return (
        <div className="d-flex | align-items-center justify-content-center | h-100">
            <form className="text-center" onSubmit={submitSearch}>
                <h1 className="m-0">Tell me about...</h1>
                <div className="row | d-flex | align-items-start | mt-4">
                    <div className="list-group | text-start | col">
                        <input className="list-group-item | p-2 | fs-5" placeholder="Location name..." />
                        <a href="#" class="list-group-item list-group-item-action">A second link item</a>
                        <a href="#" class="list-group-item list-group-item-action">A third link item</a>
                        <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
                        <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
                    </div>
                    <button className="btn btn-primary | col-auto" type="submit"><i class="bi-search fs-4" /></button>

                </div>
            </form>
        </div>
    );
};
export default SearchPage;