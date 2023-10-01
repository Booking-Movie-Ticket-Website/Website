import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ComingSoonItem from './ComingSoonItem';

function ComingSoon() {
    const settings = {
        items: 5,
        slideBy: 1,
        margin: 20,
        autoplayHoverPause: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        dots: false,
        rtl: false,
    };

    return (
        <section id="coming-soon">
            <div className="container-1500">
                <div className="row">
                    <div className="col">
                        <div className="widget-wrapper">
                            <div
                                className="widget-element text-center"
                                style={{ marginBottom: '30px' }}
                            >
                                <div className="widget-container">
                                    <div className="ova-heading ova-heading-template1">
                                        <div className="icon">
                                            <i
                                                aria-hidden="true"
                                                className="flaticon flaticon-film-roll"
                                            ></i>{' '}
                                        </div>

                                        <div className="top-heading ">
                                            <h3 className="sub-title ">New upcoming movies</h3>

                                            <h2 className="title">Movies Coming Soon</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-element">
                                <div className="widget-container">
                                    <OwlCarousel
                                        className="mb-movie-slider mb-movie-slider-template1 owl-carousel owl-theme owl-loaded owl-drag"
                                        {...settings}
                                    >
                                        <ComingSoonItem />
                                        <ComingSoonItem />
                                        <ComingSoonItem />
                                        <ComingSoonItem />
                                        <ComingSoonItem />
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ComingSoon;
