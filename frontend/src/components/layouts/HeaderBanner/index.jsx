import { useSelector } from 'react-redux';

function HeaderBanner() {
    const movieData = useSelector((state) => state.headerbanner.movieData);
    return (
        movieData && (
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-4c25947 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                data-id="4c25947"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
            >
                <div
                    className="elementor-background-overlay"
                    style={{ backgroundImage: `url(${movieData.moviePosters[0].link})` }}
                ></div>
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
                                    <div className="wrap_header_banner center ">
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
                                                        </li>
                                                        <li className="li_separator">
                                                            <span className="separator">
                                                                <i className="ovaicon-next"></i>
                                                            </span>
                                                        </li>
                                                        <li>{movieData.name}</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <h1 className="header_title">{movieData.name}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    );
}

export default HeaderBanner;
