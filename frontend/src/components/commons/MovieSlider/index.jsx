import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import arrowArrowWatchTrailer from '~/assets/images/arrow-watch-trailer.png';
import trailer1 from '~/assets/images/movie-image-01-300x201.jpg';
import trailer2 from '~/assets/images/movie-image-02-300x202.jpg';
import trailer3 from '~/assets/images/movie-image-03-300x201.jpg';
import banner1 from '~/assets/images/banner1.jpg';
import banner2 from '~/assets/images/banner2.jpg';
import banner3 from '~/assets/images/banner3.jpg';
import MovieSlick from './MovieSlick';
import TrailerSlick from './TrailerSlick';

function MovieSlider() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);

    const sliderSettings1 = {
        asNavFor: nav2,
        ref: slider1,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 10000,
        slideToScroll: 2,
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
        <section id="movie-slider">
            <Slider {...sliderSettings1} style={{ height: ' 895.977px' }}>
                <MovieSlick
                    src={banner1}
                    title="Wrong Turns Part 2"
                    category="Thriller"
                    director="Aleesha Rose / Ireland 2023"
                />
                <MovieSlick
                    src={banner2}
                    title="The Witcher Season 2"
                    category="Action"
                    director="Aleesha Rose / Ireland 2023"
                />
                <MovieSlick
                    src={banner3}
                    title="Love Nightmare"
                    category="Adventure"
                    director="Aleesha Rose / Ireland 2023"
                />
            </Slider>
            <div className="d-block position-absolute w-100 movie-trailer-wrapper">
                <img
                    decoding="async"
                    className="arrow-trailers-img position-absolute"
                    src={arrowArrowWatchTrailer}
                    alt="Arrow watch trailer"
                />
                <span className="text-trailer position-absolute text-white">Trailers</span>
                <Slider {...sliderSettings2} className="movie-trailer-slider d-flex flex-column">
                    <TrailerSlick src={trailer1} />
                    <TrailerSlick src={trailer2} />
                    <TrailerSlick src={trailer3} />
                </Slider>
            </div>
        </section>
    );
}

export default MovieSlider;
