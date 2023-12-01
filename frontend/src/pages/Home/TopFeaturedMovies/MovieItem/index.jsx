import convertToLink from '~/utils/convertToLink';
import { useDispatch } from 'react-redux';
import { openModal } from '~/redux-toolkit/TrailerVideo/TrailerVideoSlice';
function MovieItem({ data }) {
    const dispatch = useDispatch();
    const openVideoTrailer = () => {
        dispatch(openModal(data.trailerLink));
    };
    return (
        <div className="mb-movie-item item-template2">
            <a href={`/movie/${convertToLink(data.id)}`} title={data.name}>
                <div className="movie-image">
                    <img decoding="async" src={data.moviePosters[0].link} alt="The Fifth Day" />
                </div>
            </a>

            <div className="movie-info">
                <a href={`/movie/${convertToLink(data.id)}`} title={data.name}>
                    <h3 className="movie-title">{data.name}</h3>
                </a>

                <div className="categories-and-time">
                    <div className="movie-category">
                        <a href="https://demo.ovatheme.com/aovis/movie_cat/comedy/" title="Comedy">
                            {' '}
                            {data.movieCategories.map((movie) => movie.category.name).join(', ')}
                        </a>{' '}
                    </div>

                    <span className="running-time"> {data.duration} Mins</span>
                </div>

                <div className="button-wrapper">
                    <div className="has-trailer">
                        <div
                            className="btn btn-trailer-video"
                            data-src="https://www.youtube.com/watch?v=MLpWrANjFbI"
                            data-movie-id="4311"
                            onClick={openVideoTrailer}
                        >
                            <span className="text-trailer">Watch Trailer </span>
                            <i aria-hidden="true" className="fas fa-play"></i>
                        </div>
                    </div>

                    <button className="btn btn-booking" data-movie-id="4311">
                        Get Ticket{' '}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MovieItem;
