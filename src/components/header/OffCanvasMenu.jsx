const OffCanvasMenu = () => {
    return (
        <div className="offcanvas offcanvas-end w-75 text-center" id="offCanvasMenu">
            <h1 className="mt-4">Website Name</h1>
            <hr />
            <a class="btn" href="/">Home</a>
            <div className="dropdown">
                <a class="btn dropdown-toggle" data-bs-toggle="dropdown">
                    My Saved Locations
                </a>
                <ul class="dropdown-menu text-center">
                    <li><a class="dropdown-item" href="#">London</a></li>
                    <li><a class="dropdown-item" href="#">Paris</a></li>
                    <li><a class="dropdown-item" href="#">Sydney</a></li>
                </ul>
            </div>
        </div>
    );
};
export default OffCanvasMenu;