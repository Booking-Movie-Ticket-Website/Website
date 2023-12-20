import { useDispatch } from 'react-redux';
import { getMovieData } from '~/redux-toolkit/HeaderBanner/HeaderBannerSlice';
function Contact() {
    const dispatch = useDispatch();
    dispatch(
        getMovieData({
            bannerRoute: 'Contact',
            movieSrc:
                'https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/background-header-2.jpg',
        }),
    );
    return (
        <div
            data-elementor-type="wp-page"
            data-elementor-id="38"
            className="elementor elementor-38"
        >
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-34407b9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="34407b9"
                data-element_type="section"
            >
                <div className="elementor-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b5e8793"
                        data-id="b5e8793"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-49147d5 elementor-widget elementor-widget-aovis_elementor_heading"
                                data-id="49147d5"
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
                                            <h3 className="sub-title ">Contact With us</h3>

                                            <h2 className="title">
                                                Feel Free to Write us <br /> Anytime
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-53cc65f elementor-widget elementor-widget-shortcode"
                                data-id="53cc65f"
                                data-element_type="widget"
                                data-widget_type="shortcode.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-shortcode">
                                        <div
                                            className="wpcf7 js"
                                            id="wpcf7-f5-p38-o1"
                                            lang="en-US"
                                            dir="ltr"
                                        >
                                            <div className="screen-reader-response">
                                                <p
                                                    role="status"
                                                    aria-live="polite"
                                                    aria-atomic="true"
                                                ></p>
                                                <ul></ul>
                                            </div>
                                            <form
                                                action="/aovis/contact/#wpcf7-f5-p38-o1"
                                                method="post"
                                                className="wpcf7-form init"
                                                aria-label="Contact form"
                                                noValidate="novalidate"
                                                data-status="init"
                                            >
                                                <div style={{ display: 'none' }}>
                                                    <input type="hidden" name="_wpcf7" value="5" />
                                                    <input
                                                        type="hidden"
                                                        name="_wpcf7_version"
                                                        value="5.8.1"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="_wpcf7_locale"
                                                        value="en_US"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="_wpcf7_unit_tag"
                                                        value="wpcf7-f5-p38-o1"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="_wpcf7_container_post"
                                                        value="38"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="_wpcf7_posted_data_hash"
                                                        value=""
                                                    />
                                                </div>
                                                <div className="ova-ctform7">
                                                    <div className="two-column">
                                                        <div className="name ova_wrap_input">
                                                            <p>
                                                                <span
                                                                    className="wpcf7-form-control-wrap"
                                                                    data-name="your-name"
                                                                >
                                                                    <input
                                                                        size="40"
                                                                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                        aria-required="true"
                                                                        aria-invalid="false"
                                                                        placeholder="Your Name"
                                                                        value=""
                                                                        type="text"
                                                                        name="your-name"
                                                                    />
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="email ova_wrap_input">
                                                            <p>
                                                                <span
                                                                    className="wpcf7-form-control-wrap"
                                                                    data-name="your-email"
                                                                >
                                                                    <input
                                                                        size="40"
                                                                        className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                                                                        aria-required="true"
                                                                        aria-invalid="false"
                                                                        placeholder="Email Adress"
                                                                        value=""
                                                                        type="email"
                                                                        name="your-email"
                                                                    />
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="two-column">
                                                        <div className="phone ova_wrap_input">
                                                            <p>
                                                                <span
                                                                    className="wpcf7-form-control-wrap"
                                                                    data-name="your-phone"
                                                                >
                                                                    <input
                                                                        size="40"
                                                                        className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel"
                                                                        aria-required="true"
                                                                        aria-invalid="false"
                                                                        placeholder="Phone"
                                                                        value=""
                                                                        type="tel"
                                                                        name="your-phone"
                                                                    />
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="subject ova_wrap_input">
                                                            <p>
                                                                <span
                                                                    className="wpcf7-form-control-wrap"
                                                                    data-name="Subject"
                                                                >
                                                                    <input
                                                                        size="40"
                                                                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                        aria-required="true"
                                                                        aria-invalid="false"
                                                                        placeholder="Subject"
                                                                        value=""
                                                                        type="text"
                                                                        name="Subject"
                                                                    />
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="message ova_wrap_input">
                                                        <p>
                                                            <span
                                                                className="wpcf7-form-control-wrap"
                                                                data-name="your-message"
                                                            >
                                                                <textarea
                                                                    cols="40"
                                                                    rows="10"
                                                                    className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder="Write a Comment"
                                                                    name="your-message"
                                                                ></textarea>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="ova-submit">
                                                        <p>
                                                            <input
                                                                className="wpcf7-form-control wpcf7-submit has-spinner"
                                                                type="submit"
                                                                value="Send a Message"
                                                            />
                                                            <span className="wpcf7-spinner"></span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="wpcf7-response-output"
                                                    aria-hidden="true"
                                                ></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-3e5e475 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="3e5e475"
                data-element_type="section"
            >
                <div className="elementor-background-overlay"></div>
                <div className="elementor-container elementor-column-gap-extended">
                    <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-f7e58e9"
                        data-id="f7e58e9"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-12ef2eb elementor-widget elementor-widget-aovis_elementor_contact_info"
                                data-id="12ef2eb"
                                data-element_type="widget"
                                data-widget_type="aovis_elementor_contact_info.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="ova-contact-info">
                                        <div className="content">
                                            <h3 className="title">About</h3>

                                            <ul className="info">
                                                <li className="item ">
                                                    <p>
                                                        Morbi ut tellus ac leo mol stie luctus nec
                                                        vehicula sed
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>

                                        <span className="icon">
                                            <i
                                                aria-hidden="true"
                                                className="flaticon flaticon-contact-us"
                                            ></i>
                                        </span>

                                        <div
                                            className="background"
                                            style={{
                                                backgroundImage:
                                                    'url(https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/background-contact-info-1.png)',
                                            }}
                                        ></div>

                                        <div className="overlay"></div>

                                        <div className="border-wrapper"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4bc0068"
                        data-id="4bc0068"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-762c11c elementor-widget elementor-widget-aovis_elementor_contact_info"
                                data-id="762c11c"
                                data-element_type="widget"
                                data-widget_type="aovis_elementor_contact_info.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="ova-contact-info">
                                        <div className="content">
                                            <h3 className="title">Address</h3>

                                            <ul className="info">
                                                <li className="item ">
                                                    <a
                                                        href="https://www.google.com/maps"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        title="68 Road Broklyn Street, New York, UnitedStates of America"
                                                    >
                                                        68 Road Broklyn Street, New York,
                                                        UnitedStates of America
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <span className="icon">
                                            <i
                                                aria-hidden="true"
                                                className="flaticon flaticon-location"
                                            ></i>
                                        </span>

                                        <div
                                            className="background"
                                            style={{
                                                backgroundImage:
                                                    'url(https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/background-contact-info-1.png)',
                                            }}
                                        ></div>

                                        <div className="overlay"></div>

                                        <div className="border-wrapper"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-8b4f8e0"
                        data-id="8b4f8e0"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-c24b6f6 elementor-widget elementor-widget-aovis_elementor_contact_info"
                                data-id="c24b6f6"
                                data-element_type="widget"
                                data-widget_type="aovis_elementor_contact_info.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="ova-contact-info">
                                        <div className="content">
                                            <h3 className="title">Contact</h3>

                                            <ul className="info">
                                                <li className="item ">
                                                    <a href="tel:9288006780" title=" address ">
                                                        +92 ( 8800 ) - 6780
                                                    </a>
                                                </li>

                                                <li className="item ">
                                                    <a
                                                        href="mailto:needhelp@qrowd.com "
                                                        title="address"
                                                    >
                                                        needhelp@qrowd.com
                                                    </a>
                                                </li>

                                                <li className="item ">
                                                    <a
                                                        href="mailto:info@qrowd.com "
                                                        title="address"
                                                    >
                                                        info@qrowd.com
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <span className="icon">
                                            <i
                                                aria-hidden="true"
                                                className="flaticon flaticon-call"
                                            ></i>
                                        </span>

                                        <div
                                            className="background"
                                            style={{
                                                backgroundImage:
                                                    'url(https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/background-contact-info-1.png)',
                                            }}
                                        ></div>

                                        <div className="overlay"></div>

                                        <div className="border-wrapper"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-5aa8682 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                data-id="5aa8682"
                data-element_type="section"
            >
                <div className="elementor-container elementor-column-gap-no">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b1dc425"
                        data-id="b1dc425"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-10af393 elementor-widget elementor-widget-google_maps"
                                data-id="10af393"
                                data-element_type="widget"
                                data-widget_type="google_maps.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-custom-embed">
                                        <iframe
                                            loading="lazy"
                                            src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
                                            title="London Eye, London, United Kingdom"
                                            aria-label="London Eye, London, United Kingdom"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
