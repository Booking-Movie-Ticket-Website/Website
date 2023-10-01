function CarouselItem() {
    return (
        <div className="mb-movie-item item-template1">
            <a href="https://demo.ovatheme.com/aovis/movie/the-fifth-day/" title="The Fifth Day">
                <div className="movie-image">
                    <img
                        decoding="async"
                        src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-12-768x513.jpg"
                        alt="The Fifth Day"
                    />
                </div>
            </a>
            <span className="rating">
                <i className="fa fa-star"></i>
                4/5
            </span>
            <div className="movie-info">
                <div className="categories-and-time">
                    <div className="movie-category">
                        <a href="https://demo.ovatheme.com/aovis/movie_cat/comedy/" title="Comedy">
                            Comedy
                        </a>
                    </div>

                    <div className="separator">/</div>

                    <span className="running-time">180 Mins</span>
                </div>

                <a
                    href="https://demo.ovatheme.com/aovis/movie/the-fifth-day/"
                    title="The Fifth Day"
                >
                    <h3 className="movie-title">The Fifth Day </h3>
                </a>

                <button className="btn btn-booking" data-movie-id="4311">
                    Get Ticket
                </button>
            </div>
        </div>
    );
}

export default CarouselItem;
