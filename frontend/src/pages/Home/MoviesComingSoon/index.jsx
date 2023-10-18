import $ from 'jquery';
import { useEffect } from 'react';
import MovieItem from './MovieItem';

function MoviesComingSoon() {
    useEffect(() => {
        $('.owl-carousel.template3').owlCarousel({
            items: 5,
            slideBy: 1,
            margin: 20,
            autoplayHoverPause: true,
            loop: false,
            autoplay: true,
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
                1200: {
                    items: 4,
                },
                1390: {
                    items: 5,
                },
            },
        });
    }, []);
    return (
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-56817db elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="56817db"
            data-element_type="section"
        >
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5eb3c6b"
                    data-id="5eb3c6b"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-d7a3f7b elementor-widget elementor-widget-aovis_elementor_heading"
                            data-id="d7a3f7b"
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
                                        <h3 className="sub-title ">New upcoming movies</h3>

                                        <h2 className="title">Movies Coming Soon</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-9883362 elementor-widget elementor-widget-movie_slider"
                            data-id="9883362"
                            data-element_type="widget"
                            data-settings='{"pause_on_hover":"yes","infinite":"no","autoplay":"yes","autoplay_speed":3000,"dot_control":"yes"}'
                            data-widget_type="movie_slider.default"
                        >
                            <div className="elementor-widget-container">
                                <div className="mb-movie-slider mb-movie-slider-template1 template3 owl-carousel owl-theme owl-loaded owl-drag">
                                    <MovieItem
                                        title="Into the Wild"
                                        src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-11-768x514.jpg"
                                        category="Adventure"
                                        duration={190}
                                    />
                                    <MovieItem
                                        title="The Pursuit of Dreams"
                                        src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-08-768x513.jpg"
                                        category="Animation"
                                        duration={180}
                                    />
                                    <MovieItem
                                        title="Alis Keep Walking"
                                        src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-07-768x519.jpg"
                                        category="Crime"
                                        duration={180}
                                    />
                                    <MovieItem
                                        title="The Way of Water"
                                        src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-06-768x517.jpg"
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
    );
}

export default MoviesComingSoon;
