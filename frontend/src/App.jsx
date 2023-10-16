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
window.$ = $;

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="news" element={<News />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="my-account" element={<MyAccount />} />
                    <Route path="movies-all" element={<MoviesAll />} />
                    <Route path="movie/*" element={<MovieDetail />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
