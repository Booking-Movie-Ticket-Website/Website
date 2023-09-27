import PropTypes from 'prop-types';

function SlickSlide({ id, src }) {
    return (
        <div
            className="slick-slide"
            data-slick-index="0"
            aria-hidden="true"
            style={{ width: '234px' }}
            role="tabpanel"
            id={`slick-slide${id}`}
            aria-describedby={`slick-slide-control${id}`}
            tabIndex="-1"
        >
            <div>
                <div
                    className="movie-trailer-item"
                    style={{ width: '100%', display: 'inline-block' }}
                >
                    <div className="movie-trailer-media position-relative">
                        <img
                            decoding="async"
                            className="d-block w-100 object-fit-cover"
                            src={src}
                        />

                        <div className="has-trailer">
                            <div
                                className="cs-btn btn-trailer-video d-flex align-items-center justify-content-center p-0 bg-white position-absolute"
                                data-src="https://vimeo.com/252443587"
                                data-movie-id="842"
                            >
                                <span className="text-trailer position-absolute text-white d-none">
                                    Watch Trailer
                                </span>
                                <i aria-hidden="true" className="fas fa-play"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

SlickSlide.propTypes = {
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
};

export default SlickSlide;
