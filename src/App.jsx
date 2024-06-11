import { Route, Routes } from 'react-router-dom';

import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import ResultPage from "./components/result-page/ResultPage.jsx";
import SearchPage from "./components/search-page/SearchPage.jsx";
import LoginModal from './components/header/LoginModal.jsx';
import FavouritesPage from './components/favourites-page/FavouritesPage.jsx';

const App = () => {
    return (
        <>
            <Header />
            <LoginModal />
            <Routes>
                <Route
                    path="/"
                    element={
                        <SearchPage />
                    }
                />
                <Route
                    path="/search/:location"
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
            <Footer />
        </>
    );
};

export default App;
