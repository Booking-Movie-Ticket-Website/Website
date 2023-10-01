function ComingSoonItem() {
    return (
        <div className="mb-movie-item item-template1">
            <a href="https://demo.ovatheme.com/aovis/movie/into-the-wild/" title="Into the Wild">
                <div className="movie-image">
                    <img
                        decoding="async"
                        src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-11-768x514.jpg"
                        alt="Into the Wild"
                    />
                </div>
            </a>

            <div className="movie-info">
                <div className="categories-and-time">
                    <div className="movie-category">
                        <a
                            href="https://demo.ovatheme.com/aovis/movie_cat/adventure/"
                            title="Adventure"
                        >
                            Adventure
                        </a>{' '}
                    </div>

                    <div className="separator">/</div>

                    <span className="running-time">190 Mins</span>
                </div>

                <a
                    href="https://demo.ovatheme.com/aovis/movie/into-the-wild/"
                    title="Into the Wild"
                >
                    <h3 className="movie-title">Into the Wild </h3>
                </a>

                <div className="has-trailer">
                    <div
                        className="btn btn-trailer-video"
                        data-src="https://www.youtube.com/watch?v=MLpWrANjFbI"
                        data-movie-id="4315"
                    >
                        <span className="text-trailer">Watch Trailer </span>
                        <i aria-hidden="true" className="fas fa-play"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComingSoonItem;
