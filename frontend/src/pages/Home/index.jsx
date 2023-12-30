import Banner from './Banner';
import Feedbacks from './Feedbacks';
import LinesHeader from './LinesHeader';
import MovieSlider from './MovieSlider';
import MoviesComingSoon from './MoviesComingSoon';
import MoviesNowPlaying from './MoviesNowPlaying';
// import Documentary from './Documentary';
// import PhotoGallery from './PhotoGallery';
// import PhotoGalleryHeading from './PhotoGalleryHeading';
import PostContent from './PostContent';
import PostHeading from './PostHeading';
import Promotion from './Promotion';
import TopFeaturedMovies from './TopFeaturedMovies';
import axios from '~/utils/axios';
import { useState, useEffect } from 'react';

function Home() {
    const [bannerData, setBannerData] = useState('');
    const [nowPlayingData, setNowPlayingData] = useState('');
    const [topData, setTopData] = useState('');
    const [comingSoongData, setComingSoonData] = useState('');
    useEffect(() => {
        (async () => {
            await axios
                .get('/movies?page=1&take=10&filterMovies=BANNER', {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((response) => {
                    setBannerData(response.data);
                })
                .catch((error) => console.error(error));
        })();
    }, []);
    useEffect(() => {
        (async () => {
            await axios
                .get('/movies?page=1&take=10&filterMovies=NOW_PLAYING', {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((response) => {
                    setNowPlayingData(response.data);
                })
                .catch((error) => console.error(error));
        })();
    }, []);
    useEffect(() => {
        (async () => {
            await axios
                .get('/movies?page=1&take=10&filterMovies=TOP_FEATURED', {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((response) => {
                    setTopData(response.data);
                })
                .catch((error) => console.error(error));
        })();
    }, []);
    useEffect(() => {
        (async () => {
            await axios
                .get('/movies?page=1&take=10&filterMovies=COMING_SOON', {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((response) => {
                    setComingSoonData(response.data);
                })
                .catch((error) => console.error(error));
        })();
    }, []);
    return (
        <div
            id="main-page"
            className="elementor elementor-24"
            data-elementor-type="wp-page"
            data-element-id="24"
        >
            <MovieSlider data={bannerData ? bannerData.slice(0, 3) : ''} />
            <LinesHeader />
            <MoviesNowPlaying data={nowPlayingData ? nowPlayingData : ''} />
            <TopFeaturedMovies data={topData ? topData : ''} />
            {/* <Documentary />
            <PhotoGalleryHeading />
            <PhotoGallery /> */}
            <Feedbacks />
            <MoviesComingSoon data={comingSoongData ? comingSoongData : ''} />
            <Promotion />
            <PostHeading />
            <PostContent />
            <Banner />
        </div>
    );
}

export default Home;
