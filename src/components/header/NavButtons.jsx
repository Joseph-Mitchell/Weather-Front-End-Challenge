const NavButtons = () => {
    return (
        <>
            <a className="btn" href="/">Home</a>
            <div className="dropdown">
                <a className="btn dropdown-toggle" data-bs-toggle="dropdown">
                    My Saved Locations
                </a>
                <ul className="dropdown-menu text-center">
                    <li><a className="dropdown-item" href="#">London</a></li>
                    <li><a className="dropdown-item" href="#">Paris</a></li>
                    <li><a className="dropdown-item" href="#">Sydney</a></li>
                </ul>
            </div>
        </>
    );
};
export default NavButtons;