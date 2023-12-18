import { useEffect, useState } from 'react';
import LoadingSkeleton from '~/components/loading/LoadingSkeleton';
import MovieItem from '~/pages/Home/MoviesNowPlaying/MovieItem';
import axios from '~/utils/axios';
function MovieRelated({ movieId, movieCategories }) {
    const [data, setData] = useState('');

    useEffect(() => {
        (async () => {
            const movieCategory = movieCategories.map((item) => item.categoryId);
            await axios
                .get(
                    `/movies?page=1&take=4&categoryId=${movieCategory[0]}&filterMovies=NOW_PLAYING`,
                    {
                        headers: { 'Content-Type': 'application/json' },
                    },
                )
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => console.error(error));
        })();
    }, [movieCategories]);
    return (
        <div className="movie-related">
            <h2 className="movie-title-h2 related-title">More Movies Like This</h2>
            <div className="mb-movie-list mb-movie-list-template1 four_column">
                {data &&
                    data.map((item, index) => {
                        if (item.id != movieId) {
                            return (
                                <div className="mb-movie-item item-template1" key={index}>
                                    <a href={`/movie/${item.id}`} title={item.name}>
                                        <div className="movie-image">
                                            <img
                                                src={
                                                    item.moviePosters.filter(
                                                        (item) => item.isThumb,
                                                    )[0].link
                                                }
                                                alt={item.name}
                                            />
                                        </div>
                                    </a>

                                    <div className="movie-info">
                                        <div className="categories-and-time">
                                            <div className="movie-category">
                                                {item.movieCategories
                                                    .map((item) => item.category.name)
                                                    .join(', ')}
                                            </div>

                                            <div className="separator">/</div>

                                            <span className="running-time">
                                                {item.duration} Mins
                                            </span>
                                        </div>

                                        <a href="" title={item.name}>
                                            <h3 className="movie-title">{item.name} </h3>
                                        </a>

                                        <button className="btn btn-booking" data-movie-id="4141">
                                            Get Ticket
                                        </button>
                                    </div>
                                </div>
                            );
                        }
                    })}
            </div>
        </div>
    );
}
const Loading = () => {
    return (
        <div className="movie-related">
            <h2 className="movie-title-h2 related-title">
                <LoadingSkeleton styles={{ height: '36px', width: '300px' }} />
            </h2>
            <div className="mb-movie-list mb-movie-list-template1 four_column">
                <div className="mb-movie-item item-template1">
                    <MovieItem.Loading />
                </div>
                <div className="mb-movie-item item-template1">
                    <MovieItem.Loading />
                </div>
                <div className="mb-movie-item item-template1">
                    <MovieItem.Loading />
                </div>
                <div className="mb-movie-item item-template1">
                    <MovieItem.Loading />
                </div>
            </div>
        </div>
    );
};
MovieRelated.Loading = Loading;
export default MovieRelated;
