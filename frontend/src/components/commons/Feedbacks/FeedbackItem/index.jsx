function FeedbackItem() {
    return (
        <div className="item">
            <div className="wrap-content">
                <p className="content">
                    Proin a lacus arcu nullam id dui eu orci maximus. Cras at auctor lectus, vel
                    pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra.
                </p>

                <div className="author">
                    <div className="wrap-image-info">
                        <div className="image">
                            <img
                                decoding="async"
                                src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/image-3-our-team.jpg"
                                alt="Mike Hardson"
                            />
                        </div>

                        <div className="info">
                            <h3 className="name">Mike Hardson</h3>

                            <p className="job">Customer</p>
                        </div>
                    </div>

                    <div className="quote">
                        <i className="flaticon flaticon-quotes"></i>
                    </div>

                    <div className="background"></div>
                </div>
            </div>

            <div className="triangle-1"></div>
            <div className="triangle-2"></div>
        </div>
    );
}

export default FeedbackItem;
