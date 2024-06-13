import { useEffect, useLayoutEffect, useState } from "react";
import SearchSuggestionList from "./SearchSuggestionList.jsx";

const SearchPage = () => {

    const [search, setSearch] = useState("");

    useLayoutEffect(() => {
        const list = document.getElementById("location-suggestions");
        const searchBarRect = document.getElementById("search-bar").getBoundingClientRect();

        list.style.width = `${searchBarRect.right - searchBarRect.left}px`;
        list.style.left = searchBarRect.left;
        list.style.top = searchBarRect.bottom;
    });

    const hideSearches = (e) => {
        setTimeout(() => {
            document.getElementById("location-suggestions").classList.add("d-none");
        }, 100);
    };
    const showSearches = (e) => {
        document.getElementById("location-suggestions").classList.remove("d-none");
    };

    return (
        <div className="d-flex | align-items-center justify-content-center | h-100">
            <form className="text-center">
                <h1 className="m-0">Tell me about...</h1>
                <div className="d-flex">
                    <input
                        className="d-block p-2 mt-4 fs-5 flex-fill"
                        id="search-bar"
                        placeholder="Location name..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        onBlur={hideSearches}
                        onFocus={showSearches}
                    />
                </div>
                <div className="list-group | d-none | position-absolute | text-start | border-2 rounded-0" id="location-suggestions">
                    <SearchSuggestionList search={search} setSearch={setSearch} />
                </div>
                <button type="submit" className="btn btn-primary mt-4">Search</button>
            </form>
        </div>
    );
};
export default SearchPage;