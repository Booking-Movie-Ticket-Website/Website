import bgFilm01 from '~/assets/images/bg-film-01.png';
import Slider from 'react-slick';
import CarouselItem from './CarouselItem';

function NowPlaying() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: false,
    };
    return (
        <section id="now-playing-movies">
            <div className="container">
                <div className="background-overlay"></div>
                <div className="container-1440 position-relative m-auto d-flex">
                    <div className="widget-wrapper">
                        <section className="inner-section widget-element">
                            <div className="row mx-0">
                                <div className="col-4 p-0 col-md">
                                    <div className="widget-wrapper">
                                        <div className="widget-element">
                                            <div className="widget-container">
                                                <div className="ova-icon-box template1">
                                                    <div
                                                        className="background"
                                                        style={{
                                                            backgroundImage: `url(${bgFilm01})`,
                                                        }}
                                                    ></div>
                                                    <div className="overlay"></div>
                                                    <div className="content">
                                                        <p className="sub-title">Join Now</p>

                                                        <h3 className="title">
                                                            Upcoming <br /> Film Festivals
                                                        </h3>
                                                    </div>
                                                    <span className="icon">
                                                        <i
                                                            aria-hidden="true"
                                                            className="flaticon flaticon-carnival-mask"
                                                        ></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 p-0 col-md">
                                    <div className="widget-wrapper">
                                        <div className="widget-element">
                                            <div className="widget-container">
                                                <div className="ova-icon-box template1">
                                                    <div
                                                        className="background"
                                                        style={{
                                                            backgroundImage: `url(${bgFilm01})`,
                                                        }}
                                                    ></div>
                                                    <div className="overlay"></div>
                                                    <div className="content">
                                                        <p className="sub-title">Watch Now</p>

                                                        <h3 className="title">
                                                            Watch Film <br /> Awards
                                                        </h3>
                                                    </div>
                                                    <span className="icon">
                                                        <i
                                                            aria-hidden="true"
                                                            className="flaticon flaticon-prize"
                                                        ></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 p-0 col-md">
                                    <div className="widget-wrapper">
                                        <div className="widget-element">
                                            <div className="widget-container">
                                                <div className="ova-icon-box template1">
                                                    <div
                                                        className="background"
                                                        style={{
                                                            backgroundImage: `url(${bgFilm01})`,
                                                        }}
                                                    ></div>
                                                    <div className="overlay"></div>
                                                    <div className="content">
                                                        <p className="sub-title">Get Ticket</p>

                                                        <h3 className="title">
                                                            Comedy TV
                                                            <br /> Shows
                                                        </h3>
                                                    </div>
                                                    <span className="icon">
                                                        <i
                                                            aria-hidden="true"
                                                            className="flaticon flaticon-comedy"
                                                        ></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section
                            className="inner-section widget-element"
                            style={{ padding: '110px 0px 110px 0px' }}
                        >
                            <div className="container-1190">
                                <div className="row">
                                    <div className="col px-0">
                                        <div className="widget-wrapper px-0">
                                            <div className="widget-element">
                                                <div className="widget-container">
                                                    <div className="ova-heading ova-heading-template1">
                                                        <div className="icon">
                                                            <i
                                                                aria-hidden="true"
                                                                className="flaticon flaticon-film-roll"
                                                            ></i>
                                                        </div>
                                                        <div className="top-heading ">
                                                            <h3 className="sub-title ">
                                                                Watch New Movies
                                                            </h3>

                                                            <h2 className="title">
                                                                Movies Now Playing
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-element">
                                                <div className="widget-container">
                                                    <Slider {...settings}>
                                                        <CarouselItem />
                                                        <CarouselItem />
                                                        <CarouselItem />
                                                        <CarouselItem />
                                                        <CarouselItem />
                                                    </Slider>
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
        </section>
    );
}

export default NowPlaying;
