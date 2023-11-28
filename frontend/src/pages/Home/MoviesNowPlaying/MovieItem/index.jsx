import PropTypes from 'prop-types';
import convertToLink from '~/utils/convertToLink';

function MovieItem({ movieId, title, src, category, duration }) {
    return (
        <div className="mb-movie-item item-template1">
            <a href={`/movie/${convertToLink(movieId)}`} title={title}>
                <div className="movie-image">
                    <img decoding="async" src={src} alt={title} />
                </div>
            </a>

            <div className="movie-info">
                <div className="categories-and-time">
                    <div className="movie-category">
                        <a href={`/${category.toLowerCase()}`} title={category}>
                            {category}
                        </a>{' '}
                    </div>

                    <div className="separator">/</div>

                    <span className="running-time">{duration} Mins</span>
                </div>

                <a href={`/movie/${convertToLink(movieId)}`} title={title}>
                    <h3 className="movie-title">{title} </h3>
                </a>

                <button className="btn btn-booking" data-movie-id="4311">
                    Get Ticket{' '}
                </button>
            </div>
        </div>
    );
}

export default MovieItem;

MovieItem.propTypes = {
    title: PropTypes.string.isRequired,
    movieId: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
};
