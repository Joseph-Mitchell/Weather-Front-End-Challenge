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
            <a className="btn" data-bs-toggle="modal" data-bs-target="#loginModal">Log-In / Sign-Up</a>
            <a className="btn" href="/">Log-Out</a>
        </>
    );
};
export default NavButtons;