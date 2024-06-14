import { Route, Routes } from 'react-router-dom';

import Footer from "./components/ui/Footer.jsx";
import Header from "./components/ui/Header.jsx";
import ResultPage from "./components/pages/result-page/ResultPage.jsx";
import SearchPage from "./components/pages/search-page/SearchPage.jsx";
import LoginModal from './components/ui/LoginModal.jsx';
import FavouritesPage from './components/pages/favourites-page/FavouritesPage.jsx';

const App = () => {

    return (
        <>
            <Header />
            <LoginModal />
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
