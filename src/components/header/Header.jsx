const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg | position-fixed | start-0 top-0 | vw-100 | bg-secondary-subtle">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img className="p-1" src="/assets/images/logo.png" height="60px" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="btn nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn nav-link dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">My Saved Locations</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/favourites">All Locations</a></li>
                                <li className="dropdown-divider"><hr /></li>
                                <li><a className="dropdown-item" href="/search/paris">Paris</a></li>
                                <li><a className="dropdown-item" href="/search/sydney">Sydney</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="btn nav-link" data-bs-toggle="modal" data-bs-target="#loginModal">Log-In / Sign-Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn nav-link" href="/">Log-Out</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};
export default Header;