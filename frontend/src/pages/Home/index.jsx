import Banner from './Banner';
import Documentary from './Documentary';
import Feedbacks from './Feedbacks';
import LinesHeader from './LinesHeader';
import MovieSlider from './MovieSlider';
import MoviesComingSoon from './MoviesComingSoon';
import MoviesNowPlaying from './MoviesNowPlaying';
import PhotoGallery from './PhotoGallery';
import PhotoGalleryHeading from './PhotoGalleryHeading';
import PostContent from './PostContent';
import PostHeading from './PostHeading';
import Promotion from './Promotion';
import TopFeaturedMovies from './TopFeaturedMovies';
import axios from '~/utils/axios';
import { useState, useEffect } from 'react';

function Home() {
    const [data, setData] = useState('');

    useEffect(() => {
        (async () => {
            await axios
                .get('/movies?page=1&take=10', { headers: { 'Content-Type': 'application/json' } })
                .then((response) => {
                    setData(response.data);
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
            <MovieSlider data={data ? data.slice(0, 3) : ''} />
            <LinesHeader />
            <MoviesNowPlaying data={data ? data : ''} />
            <TopFeaturedMovies data={data ? data : ''} />
            <Documentary />
            <PhotoGalleryHeading />
            <PhotoGallery />
            <Feedbacks />
            <MoviesComingSoon data={data ? data : ''} />
            <Promotion />
            <PostHeading />
            <PostContent />
            <Banner />
        </div>
    );
}

export default Home;
