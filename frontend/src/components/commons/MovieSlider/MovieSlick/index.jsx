import PropTypes from 'prop-types';

function MovieSlick({ src, category, title, director }) {
    return (
        <div className="carousel-item position-relative active">
            <img src={src} className="d-block w-100" alt="" />
            <div className="movie-social-sharing d-flex">
                <span className="text-share text-white d-inline-block">Share</span>
                <span className="line d-inline-block"></span>
                <ul className="share-social-icons clearfix m-0 p-0 list-unstyled">
                    <li>
                        <a
                            className="share-ico ico-twitter"
                            // target="_blank"
                            href="https://twitter.com/share?url=https://demo.ovatheme.com/aovis/movie/love-nightmare/&amp;text=Love+Nightmare&amp;hashtags=simplesharebuttons"
                            tabIndex="0"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            className="share-ico ico-facebook"
                            // target="_blank"
                            href="https://www.facebook.com/sharer.php?u=https://demo.ovatheme.com/aovis/movie/love-nightmare/"
                            tabIndex="0"
                        >
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>

                    <li>
                        <a
                            className="share-ico ico-pinterest"
                            // target="_blank"
                            href="https://pinterest.com/pin/create/button/?url=https://demo.ovatheme.com/aovis/movie/love-nightmare/"
                            title="Love Nightmare"
                            tabIndex="0"
                        >
                            <i className="fab fa-pinterest-p"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="movie-main-item-container row_site position-relative user-select-none">
                <div className="movie-release">
                    <span className="text-white">In theater</span>
                    <h3 className="time position-relative text-white m-0">March 2023</h3>
                </div>
                <div className="movie-main-item position-relative">
                    <div className="movie-heading position-relative">
                        <h3 className="movie-category">{category} Movie</h3>
                        <a
                            href="https://demo.ovatheme.com/aovis/movie/love-nightmare/"
                            title={title}
                            tabIndex="-1"
                        >
                            <h1 className="movie-title text-white text-capitalize">{title}</h1>
                        </a>
                    </div>
                    <p className="movie-excerpt text-white">Writen and Directed by {director}</p>
                    <div className="button-wrapper">
                        <a
                            href="https://demo.ovatheme.com/aovis/movie/love-nightmare/"
                            title={title}
                            tabIndex="-1"
                            style={{ paddingRight: '4.12px' }}
                        >
                            <button className="cs-btn btn-more-info" tabIndex="-1">
                                More Info
                            </button>
                        </a>

                        <button className="cs-btn btn-booking" data-movie-id="1024" tabIndex="-1">
                            Get Ticket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

MovieSlick.propTypes = {
    src: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
};

export default MovieSlick;
