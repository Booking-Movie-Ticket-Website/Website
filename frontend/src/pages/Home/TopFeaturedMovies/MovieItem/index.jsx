import { useDispatch } from 'react-redux';
import LoadingSkeleton from '~/components/loading/LoadingSkeleton';
import { openModal } from '~/redux-toolkit/TrailerVideo/TrailerVideoSlice';
function MovieItem({ data }) {
    const dispatch = useDispatch();
    const openVideoTrailer = () => {
        dispatch(openModal(data.trailerLink));
    };
    return (
        <div className="mb-movie-item item-template2">
            <a href={`/movie/${data.id}`} title={data.name}>
                <div className="movie-image">
                    <img decoding="async" src={data.moviePosters[0].link} alt={data.name} />
                </div>
            </a>

            <div className="movie-info">
                <a href={`/movie/${data.id}`} title={data.name}>
                    <h3 className="movie-title">{data.name}</h3>
                </a>

                <div className="categories-and-time">
                    <div className="movie-category">
                        {data.movieCategories.map((item, index) =>
                            index != data.movieCategories.length - 1 ? (
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
                        Get Ticket
                    </button>
                </div>
            </div>
        </div>
    );
}

const Loading = () => {
    return (
        <div className="mb-movie-item item-template2">
            <a href="">
                <div className="movie-image">
                    <LoadingSkeleton styles={{ height: '246px' }} />
                </div>
            </a>

            <div className="movie-info">
                <a href="">
                    <h3 className="movie-title">
                        <LoadingSkeleton styles={{ height: '26px' }} />
                    </h3>
                </a>

                <div className="categories-and-time">
                    <LoadingSkeleton styles={{ width: '150px', height: '18px' }} />
                    <LoadingSkeleton styles={{ width: '70px', height: '18px' }} />
                </div>

                <div className="button-wrapper">
                    <LoadingSkeleton styles={{ width: '120px', height: '36px' }} />
                    <LoadingSkeleton styles={{ width: '120px', height: '36px' }} />
                </div>
            </div>
        </div>
    );
};
MovieItem.Loading = Loading;
export default MovieItem;
