const NavButtons = () => {
    return (
        <div className="container d-flex flex-column w-50">
            <a className="btn" href="/">Home</a>
            <div className="btn-group">
                <a className="btn btn-outline-dark" href="/favourites">My Saved Locations</a>
                <div className="dropdown">
                    <a className="btn dropdown-toggle" data-bs-toggle="dropdown" />
                    <ul className="dropdown-menu text-center">
                        <li><a className="dropdown-item" href="#">London</a></li>
                        <li><a className="dropdown-item" href="#">Paris</a></li>
                        <li><a className="dropdown-item" href="#">Sydney</a></li>
                    </ul>
                </div>
            </div>
            <a className="btn" data-bs-toggle="modal" data-bs-target="#loginModal">Log-In / Sign-Up</a>
            <a className="btn" href="/">Log-Out</a>
        </div>
    );
};
export default NavButtons;