import PropTypes from 'prop-types';
import LoadingSkeleton from '~/components/loading/LoadingSkeleton';
import { useDispatch } from 'react-redux';
import { openModal } from '~/redux-toolkit/BookingTicket/BookingTicketSlice';
function MovieItem({ data, movieId, title, src, category, duration }) {
    const dispatch = useDispatch();
    const handleOpenModal = () => {
        dispatch(openModal(movieId));
    };
    return (
        <div className="mb-movie-item item-template1">
            <a href={`/movie/${movieId}`} title={title}>
                <div className="movie-image">
                    <img decoding="async" src={src} alt={title} />
                </div>
            </a>
            <div className="movie-review">
                <span>
                    <i className="fa fa-star" style={{ color: '#f3da35', marginRight: '5px' }}></i>
                </span>
                <span className="review-text">{Math.round(data.avrStars)}/5</span>
            </div>
            <div className="movie-info">
                <div className="categories-and-time">
                    <div className="movie-category">
                        {category.map((item, index) =>
                            index != category.length - 1 ? (
                                <>
                                    <a
                                        key={index}
                                        href={`/categories/${item.categoryId}`}
                                        title={item.category.name}
                                    >
                                        {item.category.name}
                                    </a>
                                    {', '}
                                </>
                            ) : (
                                <a
                                    key={index}
                                    href={`/categories/${item.categoryId}`}
                                    title={item.category.name}
                                >
                                    {item.category.name}
                                </a>
                            ),
                        )}
                    </div>

                    <div className="separator">/</div>

                    <span className="running-time">{duration} Mins</span>
                </div>

                <a href={`/movie/${movieId}`} title={title}>
                    <h3 className="movie-title">{title} </h3>
                </a>

                <button className="btn btn-booking" data-movie-id="4311" onClick={handleOpenModal}>
                    Get Ticket
                </button>
            </div>
        </div>
    );
}
const Loading = () => {
    return (
        <div className="mb-movie-item item-template1">
            <a href="">
                <div className="movie-image">
                    <LoadingSkeleton styles={{ height: '389px' }} />
                </div>
            </a>

            <div className="movie-info">
                <div className="categories-and-time">
                    <LoadingSkeleton styles={{ height: '17px', width: '150px' }} />
                </div>

                <a href="">
                    <h3 className="movie-title">
                        <LoadingSkeleton styles={{ height: '26px', width: '200px' }} />
                    </h3>
                </a>

                <LoadingSkeleton styles={{ height: '36px', width: '103px' }} />
            </div>
        </div>
    );
};
MovieItem.Loading = Loading;
export default MovieItem;

MovieItem.propTypes = {
    title: PropTypes.string.isRequired,
    movieId: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
};
