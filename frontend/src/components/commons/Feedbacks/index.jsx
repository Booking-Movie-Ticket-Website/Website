import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import FeedbackItem from './FeedbackItem';

function Feedbacks() {
    const settings = {
        items: 1,
        slideBy: 1,
        margin: 30,
        autoplayHoverPause: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        dots: false,
        rtl: false,
    };
    return (
        <section id="feedbacks">
            <div className="container">
                <div className="background-overlay"></div>
                <div className="container-1190">
                    <div className="col-42">
                        <div className="widget-wrapper">
                            <div className="widget-element">
                                <div className="widget-container">
                                    <div className="ova-heading ova-heading-template1">
                                        <div className="icon">
                                            <i
                                                aria-hidden="true"
                                                className="flaticon flaticon-film-roll"
                                            ></i>{' '}
                                        </div>

                                        <div className="top-heading ">
                                            <h3 className="sub-title ">Our Feedbacks</h3>

                                            <h2 className="title">
                                                What They’re Talking About us?
                                            </h2>
                                        </div>

                                        <p className="description">
                                            Proin a lacus arcu. Nullam id dui eu orci maximus. Cras
                                            at auctor lectus, pretium tellus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-element">
                                <div className="widget-container">
                                    <div className="button-wrapper">
                                        <a className="button button-link size-sm" href="#">
                                            <span className="button-content-wrapper">
                                                <span className="button-text">
                                                    View All Feedbacks
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-58">
                        <div className="widget-wrapper">
                            <div className="widget-element">
                                <div className="widget-container">
                                    <div className="ova-testimonial template2">
                                        <OwlCarousel
                                            className="slide-testimonials owl-carousel owl-theme owl-loaded owl-drag"
                                            {...settings}
                                        >
                                            <FeedbackItem />
                                            <FeedbackItem />
                                            <FeedbackItem />
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feedbacks;
