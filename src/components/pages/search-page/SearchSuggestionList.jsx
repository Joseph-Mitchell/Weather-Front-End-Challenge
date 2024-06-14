import { useEffect, useState } from "react";
import searchLocation from "../../../services/Location.service.js";

const SearchSuggestionList = ({ search, setSearch, setSelectedLocation }) => {

    const [locations, setLocations] = useState([]);

    let suggestionRows = [];

    const getLocations = async () => {
        const locations = await searchLocation(search);
        setLocations(locations);
    };

    const copyToSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.innerText);
        setSelectedLocation(locations[e.target.id.replace("suggestion_", "")]);
    };

    useEffect(() => {
        getLocations();
    }, [search]);

    let count = 0;
    locations.forEach(location => {
        const state = location.state !== "" ? `, ${location.state}` : "";
        const name_agg = location.name + state + ", " + location.country;
        const id = "suggestion_" + count;

        suggestionRows.push(<button key={count} id={id} className="list-group-item list-group-item-action" onClick={copyToSearch}>{name_agg}</button>);

        count++;
    });

    return (
        <>
            {suggestionRows}
        </>
    );
};
export default SearchSuggestionList;