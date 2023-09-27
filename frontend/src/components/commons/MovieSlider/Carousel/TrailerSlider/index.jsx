import arrowArrowWatchTrailer from '~/assets/images/arrow-watch-trailer.png';
import Slider from 'react-slick';
import SlickSlide from './SlickSlide';
import trailer1 from '~/assets/images/movie-image-01-300x201.jpg';
import trailer2 from '~/assets/images/movie-image-02-300x202.jpg';
import trailer3 from '~/assets/images/movie-image-03-300x201.jpg';

function TrailerSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className="d-block position-absolute w-100 movie-trailer-wrapper">
            <img
                decoding="async"
                className="arrow-trailers-img position-absolute"
                src={arrowArrowWatchTrailer}
                alt="Arrow watch trailer"
            />
            <span className="text-trailer position-absolute text-white">Trailers</span>

            <Slider {...settings} className="movie-trailer-slider d-flex flex-column">
                <SlickSlide id={10} src={trailer1} />
                <SlickSlide id={11} src={trailer2} />
                <SlickSlide id={12} src={trailer3} />
            </Slider>
        </div>
    );
}

export default TrailerSlider;
