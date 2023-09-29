import PropTypes from 'prop-types';

function TrailerSlick({ src }) {
    return (
        <div className="movie-trailer-item" style={{ width: '100%', display: 'inline-block' }}>
            <div className="movie-trailer-media position-relative">
                <img decoding="async" className="d-block w-100 object-fit-cover" src={src} />

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
    );
}

TrailerSlick.propTypes = {
    src: PropTypes.string.isRequired,
};

export default TrailerSlick;
