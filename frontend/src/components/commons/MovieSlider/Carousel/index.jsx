import banner1 from '~/assets/images/banner1.jpg';
import banner2 from '~/assets/images/banner2.jpg';
import banner3 from '~/assets/images/banner3.jpg';
import CarouselInfo from './Carouselnfo';

function Carousel() {
    return (
        <div className="carousel-inner">
            <div className="carousel-item position-relative active" data-bs-interval="2000">
                <img src={banner1} className="d-block w-100" alt="" />
                <CarouselInfo
                    category="Thriller"
                    title="Wrong Turns Part 2"
                    director="Aleesha Rose / Ireland 2023"
                />
            </div>
            <div className="carousel-item position-relative" data-bs-interval="2000">
                <img src={banner2} className="d-block w-100" alt="" />
                <CarouselInfo
                    category="Action"
                    title="The Witcher Season 2"
                    director="Aleesha Rose / Ireland 2023"
                />
            </div>
            <div className="carousel-item position-relative" data-bs-interval="2000">
                <img src={banner3} className="d-block w-100" alt="" />
                <CarouselInfo
                    category="Adventure"
                    title="Love Nightmare"
                    director="Aleesha Rose / Ireland 2023"
                />
            </div>
        </div>
    );
}

export default Carousel;
