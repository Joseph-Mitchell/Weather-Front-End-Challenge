import { useEffect, useState } from "react";
import searchLocation from "../../../services/Location.service.js";

const SearchSuggestionList = ({ search, setSearch, setSearchValidated }) => {

    const [locations, setLocations] = useState([]);

    const getLocations = async () => {
        const locations = await searchLocation(search);
        setLocations(locations);
    };

    const copyToSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.innerText);
        setSearchValidated(true);
    };

    useEffect(() => {
        getLocations();
    }, [search]);

    let suggestionRows = [];
    locations.forEach(location => {

        const state = location.state !== "" ? `, ${location.state}` : "";
        const name_agg = location.name + state + ", " + location.country;
        suggestionRows.push(<button key={name_agg} className="list-group-item list-group-item-action" onClick={copyToSearch}>{name_agg}</button>);
    });

    return (
        <>
            {suggestionRows}
        </>
    );
};
export default SearchSuggestionList;