import $ from 'jquery';
import { useEffect } from 'react';
import MovieItem from './MovieItem';

function MoviesNowPlaying() {
    useEffect(() => {
        $('.owl-carousel').owlCarousel({
            items: 4,
            slideBy: 1,
            margin: 20,
            autoplayHoverPause: true,
            loop: false,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 500,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1024: {
                    items: 3,
                },
                1250: {
                    items: 4,
                },
            },
        });
    }, []);

    return (
        <section
            id="movies-now-playing"
            className="elementor-section elementor-top-section elementor-element elementor-element-905823c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="905823c"
            data-element_type="section"
        >
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-no">
                <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d5d8fde"
                    data-id="d5d8fde"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <section
                            className="elementor-section elementor-inner-section elementor-element elementor-element-26d7b60 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                            data-id="26d7b60"
                            data-element_type="section"
                        >
                            <div className="elementor-container elementor-column-gap-default">
                                <div
                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-2a1753b"
                                    data-id="2a1753b"
                                    data-element_type="column"
                                >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-49d319f elementor-widget elementor-widget-aovis_elementor_icon_box"
                                            data-id="49d319f"
                                            data-element_type="widget"
                                            data-widget_type="aovis_elementor_icon_box.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <div className="ova-icon-box template1 ">
                                                    <div
                                                        className="background"
                                                        style={{
                                                            backgroundImage:
                                                                'url(https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/bg-film-01.png)',
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
                                <div
                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-85abf28"
                                    data-id="85abf28"
                                    data-element_type="column"
                                >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-009fe5c elementor-widget elementor-widget-aovis_elementor_icon_box"
                                            data-id="009fe5c"
                                            data-element_type="widget"
                                            data-widget_type="aovis_elementor_icon_box.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <div className="ova-icon-box template1 ">
                                                    <div
                                                        className="background"
                                                        style={{
                                                            backgroundImage:
                                                                'url(https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/bg-film-01.png)',
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
                                <div
                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-92303ed"
                                    data-id="92303ed"
                                    data-element_type="column"
                                >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-36d385f elementor-widget elementor-widget-aovis_elementor_icon_box"
                                            data-id="36d385f"
                                            data-element_type="widget"
                                            data-widget_type="aovis_elementor_icon_box.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <div className="ova-icon-box template1 ">
                                                    <div
                                                        className="background"
                                                        style={{
                                                            backgroundImage:
                                                                'url(https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/bg-film-01.png)',
                                                        }}
                                                    ></div>
                                                    <div className="overlay"></div>

                                                    <div className="content">
                                                        <p className="sub-title">Get Ticket</p>

                                                        <h3 className="title">
                                                            Comedy TV <br /> Shows
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
                            className="elementor-section elementor-inner-section elementor-element elementor-element-8b471e9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="8b471e9"
                            data-element_type="section"
                        >
                            <div className="elementor-container elementor-column-gap-no">
                                <div
                                    className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3cb7684"
                                    data-id="3cb7684"
                                    data-element_type="column"
                                >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-0788966 elementor-widget elementor-widget-aovis_elementor_heading"
                                            data-id="0788966"
                                            data-element_type="widget"
                                            data-widget_type="aovis_elementor_heading.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <div className="ova-heading ova-heading-template1">
                                                    <div className="icon">
                                                        <i
                                                            aria-hidden="true"
                                                            className="flaticon flaticon-film-roll"
                                                        ></i>{' '}
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
                                        <div
                                            className="elementor-element elementor-element-8f55ef1 elementor-widget elementor-widget-movie_slider"
                                            data-id="8f55ef1"
                                            data-element_type="widget"
                                            data-settings='{"pause_on_hover":"yes","infinite":"no","dot_control":"yes"}'
                                            data-widget_type="movie_slider.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <div className="mb-movie-slider mb-movie-slider-template1 owl-carousel owl-theme owl-drag">
                                                    <MovieItem
                                                        title="The Fifth Day"
                                                        src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-12-768x513.jpg"
                                                        category="Comedy"
                                                        duration={180}
                                                    />
                                                    <MovieItem
                                                        title="Black and White Twins"
                                                        src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/banner-10-768x660.jpg"
                                                        category="Animation, Comedy"
                                                        duration={190}
                                                    />
                                                    <MovieItem
                                                        title="The Scariest Dream"
                                                        src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-09-768x513.jpg"
                                                        category="Thriller"
                                                        duration={180}
                                                    />
                                                    <MovieItem
                                                        title="The Seventh Day"
                                                        src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-05-768x520.jpg"
                                                        category="Animation, Thriller"
                                                        duration={180}
                                                    />
                                                    <MovieItem
                                                        title="Behind the Mask"
                                                        src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-04-768x513.jpg"
                                                        category="Thriller"
                                                        duration={190}
                                                    />
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

export default MoviesNowPlaying;
