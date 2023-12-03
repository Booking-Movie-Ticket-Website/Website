import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import News from './pages/News';
import NoPage from './pages/NoPage';
import Contact from './pages/Contact';
import $ from 'jquery';
import MyAccount from './pages/MyAccount';
import MoviesAll from './pages/MoviesAll';
import MovieDetail from './pages/MovieDetail';
import LostPassword from './pages/LostPassword';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NewsDetail from './pages/NewsDetail';
import CartMovies from './pages/CartMovies';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoviesCategory from './pages/MoviesCategory';

window.$ = $;

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="news" element={<News />} />
                        <Route path="blogs" element={<NewsDetail />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="my-account" element={<MyAccount />} />
                        <Route path="privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="lost-password" element={<LostPassword />} />
                        <Route path="movies-all" element={<MoviesAll />} />
                        <Route path="categories/*" element={<MoviesCategory />} />
                        <Route path="movie/*" element={<MovieDetail />} />
                        <Route path="*" element={<NoPage />} />
                        <Route path="cart-movies" element={<CartMovies />} />
                    </Route>
                </Routes>
                <ToastContainer />
            </Router>
        </>
    );
}

export default App;
