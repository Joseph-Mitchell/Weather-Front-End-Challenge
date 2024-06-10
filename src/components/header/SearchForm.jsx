import search from '../../assets/icons/search.svg';

const SearchForm = () => {
    return (
        <form action="/search">
            <input type="search" />
            <button className="btn" type="submit"><img src={search} /></button>
        </form>
    );
};
export default SearchForm;