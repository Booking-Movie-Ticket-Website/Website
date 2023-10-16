function MovieItem() {
    return (
        <div className="mb-movie-item item-template2">
            <a
                href="https://demo.ovatheme.com/aovis/movie/wrong-turns-part-2/"
                title="Wrong Turns Part 2"
            >
                <div className="movie-image">
                    <img
                        decoding="async"
                        src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/movie-image-01-768x517.jpg"
                        alt="Wrong Turns Part 2"
                    />
                </div>
            </a>

            <div className="movie-info">
                <a
                    href="https://demo.ovatheme.com/aovis/movie/wrong-turns-part-2/"
                    title="Wrong Turns Part 2"
                >
                    <h3 className="movie-title">Wrong Turns Part 2 </h3>
                </a>

                <div className="categories-and-time">
                    <div className="movie-category">
                        <a
                            href="https://demo.ovatheme.com/aovis/movie_cat/thriller/"
                            title="Thriller"
                        >
                            {' '}
                            Thriller
                        </a>
                    </div>

                    <span className="running-time"> 180 Mins</span>
                </div>

                <div className="button-wrapper">
                    <div className="has-trailer">
                        <div
                            className="btn btn-trailer-video"
                            data-src="https://vimeo.com/252443587"
                            data-movie-id="842"
                        >
                            <span className="text-trailer">Watch Trailer </span>
                            <i aria-hidden="true" className="fas fa-play"></i>
                        </div>
                    </div>

                    <button className="btn btn-booking" data-movie-id="842">
                        Get Ticket{' '}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MovieItem;
