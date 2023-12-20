import { useDispatch } from 'react-redux';
import LoadingSkeleton from '~/components/loading/LoadingSkeleton';
import { openModal } from '~/redux-toolkit/TrailerVideo/TrailerVideoSlice';
function MovieTopContent({ data }) {
    const dispatch = useDispatch();
    const openVideoTrailer = () => {
        dispatch(openModal(data.trailerLink));
    };
    return (
        <>
            <div className="top-content">
                <div className="movie-heading">
                    <h1 className="movie-title">{data.name}</h1>
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

                        <div className="separator">/</div>

                        <span className="running-time">{data.duration} Mins</span>
                    </div>
                </div>

                <button className="btn btn-booking" data-movie-id="842">
                    Get Ticket
                </button>
            </div>

            <div className="movie-media has-trailer">
                <div className="movie-featured-image" style={{ width: '50vw' }}>
                    <a className="gallery-fancybox">
                        <img
                            src={data.moviePosters.filter((item) => item.isThumb)[0].link}
                            alt={data.name}
                        />
                    </a>

                    <div className="btn-trailer-video-wrapper" onClick={openVideoTrailer}>
                        <div
                            className="btn-video btn-trailer-video"
                            data-src="https://vimeo.com/252443587"
                            data-movie-id="842"
                        >
                            <i aria-hidden="true" className="fas fa-play"></i>
                        </div>
                    </div>

                    <span className="text-trailer">
                        Watch the Trailer
                        <i aria-hidden="true" className="ovaicon ovaicon-diagonal-arrow"></i>
                    </span>
                </div>
            </div>

            <ul className="info-list">
                <li className="item item-0">
                    <h4 className="title">Director:</h4>

                    <span className="value">{data.director}</span>
                </li>

                <li className="item item-1">
                    <h4 className="title">Preimier:</h4>

                    <span className="value">{data.releaseDate} </span>
                </li>

                <li className="item item-3">
                    <h4 className="title">Time:</h4>

                    <span className="value">{data.duration} Mins </span>
                </li>

                <li className="item item-4">
                    <h4 className="title">Rating:</h4>

                    <span className="value">PG-13 </span>
                </li>
            </ul>
        </>
    );
}
const Loading = () => {
    return (
        <>
            <div className="top-content">
                <div className="movie-heading">
                    <h1 className="movie-title">
                        <LoadingSkeleton styles={{ height: '40px', width: '360px' }} />
                    </h1>
                    <div className="categories-and-time">
                        <LoadingSkeleton styles={{ height: '20px', width: '150px' }} />
                    </div>
                </div>
                <LoadingSkeleton styles={{ height: '60px', width: '180px' }} />
            </div>

            <div className="movie-media has-trailer">
                <div className="movie-featured-image" style={{ width: '50vw' }}>
                    <a className="gallery-fancybox">
                        <LoadingSkeleton styles={{ height: '520px' }} />
                    </a>
                </div>
            </div>

            <ul className="info-list">
                {Array(4)
                    .fill(0)
                    .map((item, index) => {
                        return (
                            <li className="item item-0" key={index}>
                                <h4 className="title">
                                    <LoadingSkeleton styles={{ height: '20px', width: '70px' }} />
                                </h4>
                                <span className="value">
                                    <LoadingSkeleton styles={{ height: '20px', width: '120px' }} />
                                </span>
                            </li>
                        );
                    })}
            </ul>
        </>
    );
};
MovieTopContent.Loading = Loading;
export default MovieTopContent;
