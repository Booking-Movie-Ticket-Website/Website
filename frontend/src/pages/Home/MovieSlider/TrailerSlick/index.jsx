import PropTypes from 'prop-types';

function TrailerSlick({ src }) {
    return (
        <div className="movie-trailer-item" style={{ width: '100%', display: 'inline-block' }}>
            <div className="movie-trailer-media">
                <img decoding="async" src={src} />

                <div className="has-trailer">
                    <div
                        className="cs-btn btn-trailer-video"
                        data-src="https://vimeo.com/252443587"
                        data-movie-id="842"
                    >
                        <span className="text-trailer">Watch Trailer</span>
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
