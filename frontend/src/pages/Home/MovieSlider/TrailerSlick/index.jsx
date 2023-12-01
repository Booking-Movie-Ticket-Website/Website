import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { openModal } from '~/redux-toolkit/TrailerVideo/TrailerVideoSlice';

function TrailerSlick({ src, trailerLink }) {
    const dispatch = useDispatch();
    const openVideoTrailer = (e) => {
        e.stopPropagation();
        dispatch(openModal(trailerLink));
    };
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
                        <i
                            aria-hidden="true"
                            className="fas fa-play"
                            onClick={openVideoTrailer}
                        ></i>
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
