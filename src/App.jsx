import { Route, Routes } from 'react-router-dom';

import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import ResultPage from "./components/result-page/ResultPage.jsx";
import SearchPage from "./components/search-page/SearchPage.jsx";

const App = () => {
    return (
        <>
            <Header />
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
            </Routes>
            <Footer />
        </>
    );
};

export default App;
