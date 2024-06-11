const SearchForm = () => {
    return (
        <form action="/search">
            <input type="search" />
            <button className="btn" type="submit"><img src="/assets/icons/misc-icons/search.svg" /></button>
        </form>
    );
};
export default SearchForm;