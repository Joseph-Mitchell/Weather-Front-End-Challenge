import { useEffect, useLayoutEffect, useState } from "react";
import SearchSuggestionList from "./SearchSuggestionList.jsx";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ type }) => {

    const [search, setSearch] = useState("");
    const [searchValidated, setSearchValidated] = useState(false);

    const navigate = useNavigate();

    useLayoutEffect(() => {
        const list = document.getElementById("location-suggestions");
        const searchBarRect = document.getElementById("search-bar").getBoundingClientRect();

        list.style.width = `${searchBarRect.right - searchBarRect.left}px`;
        list.style.left = searchBarRect.left;

        if (type === "nav")
            list.style.top = `${searchBarRect.bottom}px`;
        else
            list.style.top = searchBarRect.bottom;
    });

    useEffect(() => {
        if (searchValidated)
            document.getElementById("search-bar").classList.add("bg-primary-subtle");
        else
            document.getElementById("search-bar").classList.remove("bg-primary-subtle");
    }, [searchValidated]);

    const hideSearches = () => {
        setTimeout(() => {
            document.getElementById("location-suggestions").classList.add("d-none");
        }, 150);
    };

    const showSearches = () => {
        document.getElementById("search-bar").classList.remove("bg-danger-subtle");
        document.getElementById("searchAlert").classList.add("d-none");

        document.getElementById("location-suggestions").classList.remove("d-none");
    };

    const searchOnChange = (e) => {
        setSearch(e.target.value);
        setSearchValidated(false);
    };

    const sendSearch = (e) => {
        e.preventDefault();
        if (searchValidated)
            navigate("/search/" + search);
        else {
            document.getElementById("search-bar").classList.add("bg-danger-subtle");
            document.getElementById("searchAlert").classList.remove("d-none");
        }
    };

    let form;
    if (type === "nav") {
        form = (
            <form className="d-flex" onSubmit={sendSearch}>
                <input
                    id="search-bar"
                    className="form-control me-2"
                    placeholder="Location name..."
                    value={search}
                    onChange={searchOnChange}
                    onBlur={hideSearches}
                    onFocus={showSearches}
                />
                <div className="list-group | d-none | position-absolute | text-start | border-2 rounded-0 | z-3" id="location-suggestions">
                    <SearchSuggestionList search={search} setSearch={setSearch} setSearchValidated={setSearchValidated} />
                </div>
                <div id="searchAlert" className="alert alert-danger p-2 mb-1 d-none position-absolute | mt-5" role="alert">
                    Please choose a location from the autocomplete
                </div>
                <button className="btn" type="submit"><i className="bi-search fs-4" /></button>
            </form>
        );
    } else {
        form = (
            <form className="text-center" onSubmit={sendSearch}>
                <h1 className="m-0">Tell me about...</h1>
                <div className="d-flex">
                    <input
                        className="form-control d-block p-2 mt-4 fs-5 flex-fill"
                        id="search-bar"
                        placeholder="Location name..."
                        value={search}
                        onChange={searchOnChange}
                        onBlur={hideSearches}
                        onFocus={showSearches}
                    />
                </div>
                <div className="list-group | d-none | position-absolute | text-start | border-2 rounded-0 | z-3" id="location-suggestions">
                    <SearchSuggestionList search={search} setSearch={setSearch} setSearchValidated={setSearchValidated} />
                </div>
                <div id="searchAlert" className="alert alert-danger p-2 mb-1 d-none position-absolute" role="alert">
                    Please choose a location from the autocomplete
                </div>
                <button type="submit" className="btn btn-primary mt-4">Search</button>
            </form>
        );
    }

    return (
        <>
            {form}
        </>
    );
};
export default SearchForm;