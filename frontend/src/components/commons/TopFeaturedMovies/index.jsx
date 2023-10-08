import MovieItem from './MovieItem';
import $ from 'jquery';
import { useEffect } from 'react';
function TopFeaturedMovies() {
    useEffect(() => {
        $('.owl-carousel').owlCarousel({
            items: 3,
            slideBy: 1,
            margin: 20,
            autoplayHoverPause: true,
            loop: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 500,
            dots: true,
            nav: false,
        });
    }, []);

    return (
        <section
            id="top-featured-movies"
            className="elementor-section elementor-top-section elementor-element elementor-element-8733e3a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="8733e3a"
            data-element_type="section"
            data-settings='{"background_background":"classic"}'
        >
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-no">
                <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-96bcd45"
                    data-id="96bcd45"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <section
                            className="elementor-section elementor-inner-section elementor-element elementor-element-a0eba18 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                            data-id="a0eba18"
                            data-element_type="section"
                        >
                            <div className="elementor-container elementor-column-gap-default">
                                <div
                                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-fea0378"
                                    data-id="fea0378"
                                    data-element_type="column"
                                >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-56907dd elementor-widget elementor-widget-aovis_elementor_heading"
                                            data-id="56907dd"
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
                                <div
                                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8656789"
                                    data-id="8656789"
                                    data-element_type="column"
                                >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-eff0d64 elementor-widget elementor-widget-text-editor"
                                            data-id="eff0d64"
                                            data-element_type="widget"
                                            data-widget_type="text-editor.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <p>
                                                    Phasellus non cursus ligula, sed mattis urna.
                                                    Aenean ac tor gravida, volutpat quam eget,
                                                    consequat elit.
                                                </p>{' '}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div
                            className="elementor-element elementor-element-f9fd67c elementor-widget elementor-widget-movie_slider"
                            data-id="f9fd67c"
                            data-element_type="widget"
                            data-settings='{"pause_on_hover":"yes","infinite":"no","autoplay":"yes","autoplay_speed":3000,"dot_control":"yes","nav_control":"no"}'
                            data-widget_type="movie_slider.default"
                        >
                            <div className="elementor-widget-container">
                                <div className="mb-movie-slider mb-movie-slider-template2 owl-carousel owl-theme owl-drag">
                                    <MovieItem />
                                    <MovieItem />
                                    <MovieItem />
                                </div>
                            </div>
                        </div>
                        <section
                            className="elementor-section elementor-inner-section elementor-element elementor-element-4715833 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="4715833"
                            data-element_type="section"
                        >
                            <div className="elementor-container elementor-column-gap-no">
                                <div
                                    className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-bf458f1"
                                    data-id="bf458f1"
                                    data-element_type="column"
                                >
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-8a3ee06 elementor-widget__width-auto elementor-widget elementor-widget-aovis_elementor_ova_counter"
                                            data-id="8a3ee06"
                                            data-element_type="widget"
                                            data-widget_type="aovis_elementor_ova_counter.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <div
                                                    className="ova-counter template1 "
                                                    data-count="23"
                                                >
                                                    <div className="counter-content">
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
                                                        <span className="suffix">,00+</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="elementor-element elementor-element-4c26a0e elementor-widget__width-auto elementor-widget elementor-widget-text-editor"
                                            data-id="4c26a0e"
                                            data-element_type="widget"
                                            data-widget_type="text-editor.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <p>
                                                    more comedy &amp; horror movies you can explore
                                                </p>{' '}
                                            </div>
                                        </div>
                                        <div
                                            className="elementor-element elementor-element-a58769b elementor-widget__width-auto elementor-widget elementor-widget-button"
                                            data-id="a58769b"
                                            data-element_type="widget"
                                            data-widget_type="button.default"
                                        >
                                            <div className="elementor-widget-container">
                                                <div className="elementor-button-wrapper">
                                                    <a
                                                        className="elementor-button elementor-button-link elementor-size-sm"
                                                        href="#"
                                                    >
                                                        <span className="elementor-button-content-wrapper">
                                                            <span className="elementor-button-text">
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
        </section>
    );
}

export default TopFeaturedMovies;
