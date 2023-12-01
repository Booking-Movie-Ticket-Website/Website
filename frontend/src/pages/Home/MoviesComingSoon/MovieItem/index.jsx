import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { openModal } from '~/redux-toolkit/TrailerVideo/TrailerVideoSlice';
function MovieItem({ title, src, trailerLink, duration, category }) {
    const dispatch = useDispatch();
    const openVideoTrailer = () => {
        dispatch(openModal(trailerLink));
    };
    return (
        <div className="mb-movie-item item-template1">
            <a href="/into-the-wild/" title={title}>
                <div className="movie-image">
                    <img decoding="async" src={src} alt={title} />
                </div>
            </a>

            <div className="movie-info">
                <div className="categories-and-time">
                    <div className="movie-category">
                        <a href="/movie_cat/adventure" title={category}>
                            {category}
                        </a>{' '}
                    </div>

                    <div className="separator">/</div>

                    <span className="running-time">{duration} Mins</span>
                </div>

                <a href="https://demo.ovatheme.com/aovis/movie/into-the-wild/" title={title}>
                    <h3 className="movie-title">{title} </h3>
                </a>

                <div className="has-trailer">
                    <div
                        className="btn btn-trailer-video"
                        data-src="https://www.youtube.com/watch?v=MLpWrANjFbI"
                        data-movie-id="4315"
                        onClick={openVideoTrailer}
                    >
                        <span className="text-trailer">Watch Trailer </span>
                        <i aria-hidden="true" className="fas fa-play"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieItem;

MovieItem.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
};
