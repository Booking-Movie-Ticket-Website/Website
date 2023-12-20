import { useEffect } from 'react';
import FeedbackItem from './FeedbackItem';
import $ from 'jquery';

function Feedbacks() {
    useEffect(() => {
        $('.owl-carousel.template4').owlCarousel({
            items: 1,
            slideBy: 1,
            margin: 30,
            autoplayHoverPause: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 500,
            dots: true,
            rtl: false,
        });
    }, []);
    return (
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-aedc756 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="aedc756"
            data-element_type="section"
            data-settings='{"background_background":"classNameic"}'
        >
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3edd1e7"
                    data-id="3edd1e7"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-7683021 elementor-widget elementor-widget-aovis_elementor_heading"
                            data-id="7683021"
                            data-element_type="widget"
                            data-widget_type="aovis_elementor_heading.default"
                        >
                            <div className="elementor-widget-container">
                                <div className="ova-heading ova-heading-template1">
                                    <div className="icon">
                                        <i
                                            aria-hidden="true"
                                            className="flaticon flaticon-film-roll"
                                        ></i>
                                    </div>

                                    <div className="top-heading ">
                                        <h3 className="sub-title ">Our Feedbacks</h3>

                                        <h2 className="title">What They are Talking About us?</h2>
                                    </div>

                                    <p className="description">
                                        Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at
                                        auctor lectus, pretium tellus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-62a5c17 elementor-widget elementor-widget-button"
                            data-id="62a5c17"
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
                                                View All Feedbacks
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a746694"
                    data-id="a746694"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-f4611df elementor-widget elementor-widget-aovis_elementor_testimonial"
                            data-id="f4611df"
                            data-element_type="widget"
                            data-settings='{"pause_on_hover":"yes","infinite":"yes","autoplay":"yes","autoplay_speed":3000,"dot_control":"yes"}'
                            data-widget_type="aovis_elementor_testimonial.default"
                        >
                            <div className="elementor-widget-container">
                                <div className="ova-testimonial template2">
                                    <div className="slide-testimonials owl-carousel template4 owl-theme owl-loaded owl-drag">
                                        <FeedbackItem
                                            content="Proin a lacus arcu nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra."
                                            src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/image-1-our-team.jpg"
                                            job="Customer"
                                            name="Hubert J. Johnso"
                                        />
                                        <FeedbackItem
                                            content="Proin a lacus arcu nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra."
                                            src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/image-2-our-team.jpg"
                                            job="Customer"
                                            name="Pacific D. Lee"
                                        />
                                        <FeedbackItem
                                            content="Proin a lacus arcu nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra."
                                            src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/image-3-our-team.jpg"
                                            job="Customer"
                                            name="Mike Hardson"
                                        />
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
