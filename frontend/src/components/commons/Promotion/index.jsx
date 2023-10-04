function Promotion() {
    return (
        <section id="promotion">
            <div className="container row">
                <div className="col-4">
                    <div className="widget-wrapper">
                        <div className="widget-element">
                            <div className="widget-container">
                                <div className="ova-icon-box template2 ">
                                    <div className="background bg-1"></div>
                                    <div className="overlay"></div>

                                    <div className="content">
                                        <h3 className="title">
                                            Top 6 Movies in <br /> Theaters
                                        </h3>
                                    </div>

                                    <span className="icon">
                                        <i
                                            aria-hidden="true"
                                            className="flaticon flaticon-clapperboard"
                                        ></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="widget-wrapper" style={{ padding: '0 2px' }}>
                        <div className="widget-element">
                            <div className="widget-container">
                                <div className="ova-icon-box template2 ">
                                    <div className="background bg-2"></div>
                                    <div className="overlay primary"></div>

                                    <div className="content">
                                        <h3 className="title">
                                            Watching Coming <br /> Soon Movies
                                        </h3>
                                    </div>

                                    <span className="icon">
                                        <i
                                            aria-hidden="true"
                                            className="flaticon flaticon-film"
                                        ></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="widget-wrapper">
                        <div className="widget-element">
                            <div className="widget-container">
                                <div className="ova-icon-box template2 ">
                                    <div className="background bg-3"></div>
                                    <div className="overlay"></div>

                                    <div className="content">
                                        <h3 className="title">
                                            Hot Movies Trailers <br /> Live Now
                                        </h3>
                                    </div>

                                    <span className="icon">
                                        <i
                                            aria-hidden="true"
                                            className="flaticon flaticon-video-camera"
                                        ></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promotion;
