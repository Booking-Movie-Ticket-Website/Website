import Form from './Form';

function MyAccount() {
    return (
        <>
            <div
                data-elementor-type="wp-post"
                data-elementor-id="108"
                className="elementor elementor-108"
            >
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-4c25947 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                    data-id="4c25947"
                    data-element_type="section"
                    data-settings='{"background_background":"classic"}'
                >
                    <div className="elementor-background-overlay"></div>
                    <div className="elementor-container elementor-column-gap-no">
                        <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-89b2dab"
                            data-id="89b2dab"
                            data-element_type="column"
                        >
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                    className="elementor-element elementor-element-f75b9d1 elementor-widget elementor-widget-aovis_elementor_header_banner"
                                    data-id="f75b9d1"
                                    data-element_type="widget"
                                    data-widget_type="aovis_elementor_header_banner.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div className="wrap_header_banner  center ">
                                            <div className="cover_color"></div>

                                            <div className="header_banner_el ">
                                                <div className="header_breadcrumbs">
                                                    <div id="breadcrumbs">
                                                        <ul className="breadcrumb">
                                                            <li>
                                                                <a
                                                                    href="https://demo.ovatheme.com/aovis/"
                                                                    title="Home"
                                                                >
                                                                    Home
                                                                </a>
                                                            </li>{' '}
                                                            <li className="li_separator">
                                                                <span className="separator">
                                                                    <i className="ovaicon-next"></i>
                                                                </span>
                                                            </li>
                                                            <li>My account</li>
                                                        </ul>
                                                    </div>{' '}
                                                </div>

                                                <h1 className="header_title">My account </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-42d6d99 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                    data-id="42d6d99"
                    data-element_type="section"
                >
                    <div className="elementor-container elementor-column-gap-no">
                        <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-46a73ae"
                            data-id="46a73ae"
                            data-element_type="column"
                        >
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                    className="elementor-element elementor-element-1f9c558 elementor-widget elementor-widget-image"
                                    data-id="1f9c558"
                                    data-element_type="widget"
                                    data-widget_type="image.default"
                                >
                                    <div className="elementor-widget-container">
                                        <img
                                            width="1894"
                                            height="10"
                                            src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/image-lines-header.jpg"
                                            className="attachment-full size-full wp-image-114"
                                            alt=""
                                            srcSet="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/image-lines-header.jpg 1894w, https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/image-lines-header-300x2.jpg 300w, https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/image-lines-header-1024x5.jpg 1024w, https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/image-lines-header-768x4.jpg 768w, https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/image-lines-header-1536x8.jpg 1536w, https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/image-lines-header-600x3.jpg 600w"
                                            sizes="(max-width: 1894px) 100vw, 1894px"
                                        />{' '}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="row_site">
                <div className="container_site">
                    <div id="main-content" className="main">
                        <Form />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyAccount;
