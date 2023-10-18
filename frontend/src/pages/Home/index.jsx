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

function Home() {
    return (
        <div
            id="main-page"
            className="elementor elementor-24"
            data-elementor-type="wp-page"
            data-element-id="24"
        >
            <section
                id="movie-slider"
                className="elementor-section elementor-top-section elementor-element elementor-element-1dd1e82 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                data-id="1dd1e82"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
            >
                <div className="elementor-container elementor-column-gap-no">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-adccf66"
                        data-id="adccf66"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-494f372 elementor-widget elementor-widget-movie_main_slider"
                                data-id="494f372"
                                data-element_type="widget"
                                data-settings='{"show_share_social":"yes","show_category":"yes","show_release_date":"yes","show_trailer":"yes","infinite":"no","pause_on_hover":"yes","autoplay":"yes","autoplay_speed":6900}'
                                data-widget_type="movie_main_slider.default"
                            >
                                <div className="elementor-widget-container">
                                    <MovieSlider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <LinesHeader />
            <MoviesNowPlaying />
            <TopFeaturedMovies />
            <Documentary />
            <PhotoGalleryHeading />
            <PhotoGallery />
            <Feedbacks />
            <MoviesComingSoon />
            <Promotion />
            <PostHeading />
            <PostContent />
            <Banner />
        </div>
    );
}

export default Home;
