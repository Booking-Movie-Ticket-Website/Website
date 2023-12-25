import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import arrowArrowWatchTrailer from '~/assets/images/arrow-watch-trailer.png';
import MovieSlick from './MovieSlick';
import TrailerSlick from './TrailerSlick';
import PropTypes from 'prop-types';
function MovieSlider({ data }) {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const slider1 = useRef(null);
    const slider2 = useRef(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, [data]);

    const sliderSettings1 = {
        asNavFor: nav2,
        ref: slider1,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 10000,
        slideToScroll: 2,
        adaptiveHeight: true,
    };

    const sliderSettings2 = {
        asNavFor: nav1,
        ref: slider2,
        slidesToShow: 2,
        swipeToSlide: true,
        focusOnSelect: true,
        arrows: false,
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 10000,
    };

    return (
        data && (
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
                                    <div
                                        className="mb-movie-main-slider-wrapper main-wrapper-template1"
                                        style={{ visibility: 'visible', opacity: '1' }}
                                    >
                                        <Slider
                                            {...sliderSettings1}
                                            className="mb-movie-main-slider main-template1"
                                            data-options='{"items":2,"autoplayHoverPause":true,"loop":false,"autoplay":true,"autoplayTimeout":6900,"smartSpeed":500,"rtl":false,"template":"template1"}'
                                        >
                                            {data.map((item) => (
                                                <MovieSlick
                                                    key={item.id}
                                                    movieId={item.id}
                                                    src={
                                                        item.moviePosters.filter(
                                                            (item) => item.isThumb,
                                                        )[0]?.link
                                                    }
                                                    title={item.name}
                                                    category={item.movieCategories
                                                        .map((movie) => movie.category.name)
                                                        .join(', ')}
                                                    director={item.director}
                                                    releaseDate={item.releaseDate}
                                                />
                                            ))}
                                        </Slider>
                                    </div>
                                    <div
                                        className="mb-movie-trailer-slider-wrapper trailer-template1"
                                        style={{ display: 'block' }}
                                    >
                                        <img
                                            decoding="async"
                                            className="arrow-trailers-img"
                                            src={arrowArrowWatchTrailer}
                                            alt="Arrow watch trailer"
                                        />
                                        <span className="text-trailer">Trailers</span>
                                        <Slider
                                            {...sliderSettings2}
                                            className="mb-movie-trailer-slider slick-dotted"
                                        >
                                            {data.map((item) => (
                                                <TrailerSlick
                                                    key={item.id}
                                                    src={
                                                        item.moviePosters.filter(
                                                            (item) => item.isThumb,
                                                        )[0]?.link
                                                    }
                                                    trailerLink={item.trailerLink}
                                                />
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    );
}

export default MovieSlider;

MovieSlider.propTypes = {
    data: PropTypes.array.isRequired,
};
