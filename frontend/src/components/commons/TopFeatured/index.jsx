import Slider from 'react-slick';
import TopFeaturedItem from './TopFeaturedItem';

function TopFeatured() {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: false,
    };
    return (
        <section id="top-featured-movies">
            <div className="container">
                <div className="background-overlay"></div>
                <div className="container-1190">
                    <div className="row">
                        <div className="col px-0">
                            <div className="widget-wrapper">
                                <section
                                    className="widget-element"
                                    style={{ marginBottom: '30px' }}
                                >
                                    <div className="widget-container">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="widget-wrapper">
                                                    <div className="widget-element">
                                                        <div className="widget-container">
                                                            <div className="ova-heading ova-heading-template1 text-start">
                                                                <div className="icon">
                                                                    <i
                                                                        aria-hidden="true"
                                                                        className="flaticon flaticon-film-roll"
                                                                    ></i>
                                                                </div>

                                                                <div className="top-heading ">
                                                                    <h3 className="sub-title ">
                                                                        Checkout Movies
                                                                    </h3>

                                                                    <h2 className="title">
                                                                        Top Featured Movies
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 d-flex align-items-center">
                                                <div className="widget-wrapper">
                                                    <div className="widget-element">
                                                        <div className="widget-container">
                                                            <p className="m-0">
                                                                Phasellus non cursus ligula, sed
                                                                mattis urna. Aenean ac tor gravida,
                                                                volutpat quam eget, consequat elit.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="widget-element">
                                    <div
                                        className="widget-container"
                                        style={{ marginBottom: '20px' }}
                                    >
                                        <Slider {...settings}>
                                            <TopFeaturedItem />
                                            <TopFeaturedItem />
                                            <TopFeaturedItem />
                                        </Slider>
                                    </div>
                                </div>
                                <section className="widget-element d-flex justify-content-center align-items-center">
                                    <div
                                        className="widget-container w-100"
                                        style={{ maxWidth: '622px' }}
                                    >
                                        <div className="row">
                                            <div className="col">
                                                <div className="widget-wrapper widget-exploring align-items-center justify-content-center flex-nowrap">
                                                    <div className="widget-element mb-0 w-auto">
                                                        <div className="widget-container">
                                                            <div
                                                                className="ova-counter template1 justify-content-center"
                                                                data-count="23"
                                                            >
                                                                <div className="counter-content p-0">
                                                                    <span className="odometer odometer-auto-theme">
                                                                        <div className="odometer-inside">
                                                                            <span className="odometer-digit">
                                                                                <span className="odometer-digit-spacer">
                                                                                    8
                                                                                </span>
                                                                                <span className="odometer-digit-inner">
                                                                                    <span className="odometer-ribbon">
                                                                                        <span className="odometer-ribbon-inner">
                                                                                            <span className="odometer-value">
                                                                                                2
                                                                                            </span>
                                                                                        </span>
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                            <span className="odometer-digit">
                                                                                <span className="odometer-digit-spacer">
                                                                                    8
                                                                                </span>
                                                                                <span className="odometer-digit-inner">
                                                                                    <span className="odometer-ribbon">
                                                                                        <span className="odometer-ribbon-inner">
                                                                                            <span className="odometer-value">
                                                                                                3
                                                                                            </span>
                                                                                        </span>
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </span>
                                                                    <span className="suffix">
                                                                        ,00+
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-element mb-0 w-auto">
                                                        <div
                                                            className="widget-container"
                                                            style={{ margin: '0px 30px 0px 10px' }}
                                                        >
                                                            <p className="m-0">
                                                                more comedy &amp; horror movies you
                                                                can explore
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="widget-element w-auto">
                                                        <div className="button-wrapper">
                                                            <a
                                                                className="button button-link size-sm d-inline-block"
                                                                href="#"
                                                            >
                                                                <span className="button-content-wrapper align-items-center d-flex justify-content-center">
                                                                    <span className="button-text">
                                                                        Explore Now
                                                                    </span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopFeatured;
