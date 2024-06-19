import { Route, Routes } from "react-router-dom";
import SearchForm from "../pages/search-page/SearchForm.jsx";

const Header = ({ loginModal, loggedIn, setLoggedIn }) => {

    function openModal() {
        loginModal.show();
    }

    function logOut() {
        setLoggedIn(false);
        localStorage.removeItem("token");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg | position-fixed | start-0 top-0 | vw-100 | bg-secondary-subtle | z-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img className="p-1" src="/assets/images/logo.png" height="60px" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="btn nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="btn nav-link dropdown-toggle" data-bs-toggle="dropdown">My Saved Locations</a>
                                <ul className="dropdown-menu | text-center">
                                    <li><a className="dropdown-item" href="/favourites">All Locations</a></li>
                                    <li className="dropdown-divider"><hr /></li>
                                    <li><a className="dropdown-item" href="/search/paris">Paris</a></li>
                                    <li><a className="dropdown-item" href="/search/sydney">Sydney</a></li>
                                </ul>
                            </li>
                            {
                                !loggedIn && (
                                    <li className="nav-item">
                                        <a className="btn nav-link" onClick={openModal}>Log-In / Sign-Up</a>
                                    </li>
                                )
                            }
                            {
                                loggedIn && (
                                    <li className="nav-item">
                                        <a className="btn nav-link" type="button" data-bs-toggle="modal" data-bs-target="#logoutModal">Log-Out</a>
                                    </li>
                                )
                            }
                        </ul>
                        <Routes>
                            <Route
                                exact
                                path="/"
                                element={<></>}
                            />
                            <Route
                                exact
                                path="*"
                                element={<SearchForm type="nav" />}
                            />
                        </Routes>
                    </div>
                </div>
            </nav>
            <div className="modal fade" tabIndex="-1" id="logoutModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Log Out?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={logOut}>Log Me Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Header;