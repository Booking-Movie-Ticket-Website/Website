function TopFeaturedItem() {
    return (
        <div className="mb-movie-item item-template2">
            <a href="https://demo.ovatheme.com/aovis/movie/the-fifth-day/" title="The Fifth Day">
                <div className="movie-image">
                    <img
                        decoding="async"
                        src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-12-768x513.jpg"
                        alt="The Fifth Day"
                    />
                </div>
            </a>

            <div className="movie-info">
                <a
                    href="https://demo.ovatheme.com/aovis/movie/the-fifth-day/"
                    title="The Fifth Day"
                >
                    <h3 className="movie-title">The Fifth Day </h3>
                </a>

                <div className="categories-and-time">
                    <div className="movie-category">
                        <a href="https://demo.ovatheme.com/aovis/movie_cat/comedy/" title="Comedy">
                            {' '}
                            Comedy
                        </a>
                    </div>

                    <span className="running-time"> 180 Mins</span>
                </div>

                <div className="button-wrapper">
                    <div className="has-trailer">
                        <div
                            className="btn btn-trailer-video"
                            data-src="https://www.youtube.com/watch?v=MLpWrANjFbI"
                            data-movie-id="4311"
                        >
                            <span className="text-trailer">Watch Trailer </span>
                            <i aria-hidden="true" className="fas fa-play"></i>
                        </div>
                    </div>

                    <button className="btn btn-booking" data-movie-id="4311">
                        Get Ticket
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TopFeaturedItem;
