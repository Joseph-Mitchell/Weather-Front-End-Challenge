import bookmark from '../../assets/icons/bookmark-star.svg';
import unbookmark from '../../assets/icons/bookmark-star-fill.svg';

const Favourite = () => {
    return (
        <li className="list-group-item">
            <a href=""><img src={unbookmark} /></a>
            <a href="/search/test">Location</a>
        </li>
    );
};
export default Favourite;