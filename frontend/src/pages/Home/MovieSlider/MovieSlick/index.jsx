import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { openModal } from '~/redux-toolkit/BookingTicket/BookingTicketSlice';

function MovieSlick({ src, category, title, director }) {
    console.log('render');
    const dispatch = useDispatch();
    const handleOpenModal = () => {
        dispatch(openModal('3024'));
    };
    return (
        <div className="movie-main-item-wrapper" style={{ width: '100%', display: 'inline-block' }}>
            <img
                className="slideshow-image"
                alt={title}
                style={{ visibility: 'visible', opacity: '1' }}
                src={src}
            />
            <div className="movie-social-sharing">
                <span className="text-share">Share</span>
                <span className="line"></span>
                <ul className="share-social-icons clearfix">
                    <li>
                        <a
                            className="share-ico ico-twitter"
                            target="_blank"
                            rel="noreferrer"
                            href="https://twitter.com/share?url=https://demo.ovatheme.com/aovis/movie/wrong-turns-part-2/&amp;text=Wrong+Turns+Part+2&amp;hashtags=simplesharebuttons"
                            tabIndex="-1"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>

                    <li>
                        <a
                            className="share-ico ico-facebook"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/sharer.php?u=https://demo.ovatheme.com/aovis/movie/wrong-turns-part-2/"
                            tabIndex="-1"
                        >
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>

                    <li>
                        <a
                            className="share-ico ico-pinterest"
                            target="_blank"
                            rel="noreferrer"
                            href="https://pinterest.com/pin/create/button/?url=https://demo.ovatheme.com/aovis/movie/wrong-turns-part-2/"
                            title={title}
                            tabIndex="-1"
                        >
                            <i className="fab fa-pinterest-p"></i>
                        </a>
                    </li>
                </ul>{' '}
            </div>

            <div className="movie-main-item-container row_site">
                <div className="movie-release">
                    <span className="text">In theater</span>
                    <h3 className="time">March 2023</h3>
                </div>

                <div className="movie-main-item">
                    <div className="movie-heading">
                        <h3 className="movie-category">{category} </h3>

                        <a href="/" title={title} tabIndex="-1">
                            <h1 className="movie-title">{title} </h1>
                        </a>
                    </div>

                    <p className="movie-excerpt">Writen and Directed by {director} </p>

                    <div className="button-wrapper">
                        <a href="/" title={title} tabIndex="-1">
                            <button className="cs-btn btn-more-info" tabIndex="-1">
                                More Info{' '}
                            </button>
                        </a>

                        <button
                            onClick={handleOpenModal}
                            className="cs-btn btn-booking"
                            data-movie-id="842"
                            tabIndex="-1"
                        >
                            Get Ticket{' '}
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
