import $ from 'jquery';
import { useEffect } from 'react';
import Photo from './Photo';

function PhotoGallery() {
    useEffect(() => {
        $('.owl-carousel.template5').owlCarousel({
            items: 5,
            margin: 10,
            slideBy: 1,
            autoplayHoverPause: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 800,
            dots: true,
            nav: false,
            rtl: false,
            responsive: {
                0: {
                    items: 2,
                },
                800: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
                1360: {
                    items: 5,
                },
            },
        });
    }, []);

    return (
        <section
            id="photo-gallery"
            style={{ marginBottom: '60px' }}
            className="elementor-section elementor-top-section elementor-element elementor-element-cbff3c2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="cbff3c2"
            data-element_type="section"
        >
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-008fced"
                    data-id="008fced"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-eccddd1 elementor-widget elementor-widget-aovis_elementor_gallery_slide"
                            data-id="eccddd1"
                            data-element_type="widget"
                            data-settings='{"pause_on_hover":"yes","infinite":"yes","rtl":"no"}'
                            data-widget_type="aovis_elementor_gallery_slide.default"
                        >
                            <div className="elementor-widget-container">
                                <div className="ova-gallery-slide">
                                    <div className="gallery-slide owl-carousel template5 owl-loaded owl-drag">
                                        <Photo src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/img-1-gallery-slide-285x300.jpg" />
                                        <Photo src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/img-2-gallery-slide-285x300.jpg" />
                                        <Photo src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/img-3-gallery-slide-285x300.jpg" />
                                        <Photo src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/img-4-gallery-slide-285x300.jpg" />
                                        <Photo src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/img-5-gallery-slide-285x300.jpg" />
                                    </div>
                                    <input
                                        type="hidden"
                                        className="data-gallery-slide"
                                        data-gallery='[{"src":"https:\/\/demo.ovatheme.com\/aovis\/wp-content\/uploads\/2023\/03\/img-1-gallery-slide.jpg","caption":"Gallery Slide","thumb":"https:\/\/demo.ovatheme.com\/aovis\/wp-content\/uploads\/2023\/03\/img-1-gallery-slide-285x300.jpg"},{"src":"https:\/\/demo.ovatheme.com\/aovis\/wp-content\/uploads\/2023\/03\/img-2-gallery-slide.jpg","caption":"Gallery Slide","thumb":"https:\/\/demo.ovatheme.com\/aovis\/wp-content\/uploads\/2023\/03\/img-2-gallery-slide-285x300.jpg"},{"src":"https:\/\/demo.ovatheme.com\/aovis\/wp-content\/uploads\/2023\/03\/img-3-gallery-slide.jpg","caption":"Gallery Slide","thumb":"https:\/\/demo.ovatheme.com\/aovis\/wp-content\/uploads\/2023\/03\/img-3-gallery-slide-285x300.jpg"},{"src":"https:\/\/demo.ovatheme.com\/aovis\/wp-content\/uploads\/2023\/03\/img-4-gallery-slide.jpg","caption":"Gallery Slide","thumb":"https:\/\/demo.ovatheme.com\/aovis\/wp-content\/uploads\/2023\/03\/img-4-gallery-slide-285x300.jpg"},{"src":"https:\/\/demo.ovatheme.com\/aovis\/wp-content\/uploads\/2023\/03\/img-5-gallery-slide.jpg","caption":"Gallery Slide","thumb":"https:\/\/demo.ovatheme.com\/aovis\/wp-content\/uploads\/2023\/03\/img-5-gallery-slide-285x300.jpg"},{"src":"https:\/\/demo.ovatheme.com\/aovis\/wp-content\/uploads\/2023\/03\/img-6-gallery-slide.jpg","caption":"Gallery Slide","thumb":"https:\/\/demo.ovatheme.com\/aovis\/wp-content\/uploads\/2023\/03\/img-6-gallery-slide-285x300.jpg"}]'
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

export default PhotoGallery;
