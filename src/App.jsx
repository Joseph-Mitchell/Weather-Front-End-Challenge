import { Route, Routes, useSearchParams } from 'react-router-dom';

import Footer from "./components/ui/Footer.jsx";
import Header from "./components/ui/Header.jsx";
import ResultPage from "./components/pages/result-page/ResultPage.jsx";
import SearchPage from "./components/pages/search-page/SearchPage.jsx";
import LoginModal from './components/ui/LoginModal.jsx';
import FavouritesPage from './components/pages/favourites-page/FavouritesPage.jsx';
import { useEffect, useState } from 'react';
import getFavourites from './services/GetFavourites.service.js';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const [loginModal, setLoginModal] = useState({});

    const [favourites, setFavourites] = useState([]);

    const [loadFavs, setLoadFavs] = useState(false);

    async function loadFavourites() {
        const fav = await getFavourites(localStorage.getItem("token"));
        setFavourites(fav);
    }

    console.log(favourites);

    useEffect(() => {
        if (localStorage.getItem("token"))
            setLoggedIn("true");
    }, []);

    useEffect(() => {
        setLoadFavs(false);
        loadFavourites();
    }, [loggedIn, loadFavs]);

    return (
        <>
            <Header loginModal={loginModal} loggedIn={loggedIn} setLoggedIn={setLoggedIn} favourites={favourites} />
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
                                <ResultPage setLoadFavs={setLoadFavs} favourites={favourites} loggedIn={loggedIn} />
                            }
                        />
                        <Route
                            path="/favourites"
                            element={
                                <FavouritesPage setLoadFavs={setLoadFavs} favourites={favourites} />
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
