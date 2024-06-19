import { Route, Routes } from 'react-router-dom';

import Footer from "./components/ui/Footer.jsx";
import Header from "./components/ui/Header.jsx";
import ResultPage from "./components/pages/result-page/ResultPage.jsx";
import SearchPage from "./components/pages/search-page/SearchPage.jsx";
import LoginModal from './components/ui/LoginModal.jsx';
import FavouritesPage from './components/pages/favourites-page/FavouritesPage.jsx';
import { useEffect, useState } from 'react';
import { Modal } from "bootstrap";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const [loginModal, setLoginModal] = useState({});

    useEffect(() => {
        if (localStorage.getItem("token"))
            setLoggedIn("true");
    }, []);

    return (
        <>
            <Header loginModal={loginModal} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} setLoggedIn={setLoggedIn} />
            <div className="h-100 | d-flex | flex-column">
                <div className="container-fluid | page | flex-fill | text-light text-center">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <SearchPage />
                            }
                        />
                        <Route
                            path="/search"
                            element={
                                <ResultPage />
                            }
                        />
                        <Route
                            path="/favourites"
                            element={
                                <FavouritesPage />
                            }
                        />
                    </Routes>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default App;
