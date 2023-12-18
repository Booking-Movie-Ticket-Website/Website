import { useState, useEffect } from 'react';
import axios from '~/utils/axios';
import MovieTopCast from './MovieTopCast';
import MovieRelated from './MovieRelated';
import MovieTopContent from './MovieTopContent';
import { useDispatch } from 'react-redux';
import { getMovieData } from '~/redux-toolkit/HeaderBanner/HeaderBannerSlice';
import LoadingSkeleton from '~/components/loading/LoadingSkeleton';
function MovieDetail() {
    const [data, setData] = useState('');
    const dispatch = useDispatch();
    const movieId = window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1);
    useEffect(() => {
        (async () => {
            await axios
                .get(`/movies/${movieId}`, {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((response) => {
                    setData(response);
                    const movieData = {
                        movieId: response.id,
                        bannerRoute: response.name,
                        movieSrc: response.moviePosters.filter((item) => item.isThumb)[0].link,
                    };
                    dispatch(getMovieData(movieData));
                })
                .catch((error) => console.error(error));
        })();
    }, [movieId]);
    return (
        <>
            {data ? (
                <div className="row_site">
                    <div className="container_site">
                        <div className="ova_movie_single">
                            <MovieTopContent data={data} />
                            <MovieTopCast data={data} />
                            <div className="main-content">
                                <h2 className="movie-title-h2 story-title">Story Line</h2>
                                <p>{data.description}</p>
                            </div>
                            <MovieRelated
                                movieId={data.id}
                                movieCategories={data.movieCategories}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="row_site">
                    <div className="container_site">
                        <div className="ova_movie_single">
                            <MovieTopContent.Loading />
                            <MovieTopCast.Loading />
                            <div className="main-content">
                                <h2 className="movie-title-h2 story-title">
                                    <LoadingSkeleton styles={{ height: '36px', width: '170px' }} />
                                </h2>
                                <p>
                                    <LoadingSkeleton
                                        styles={{ height: '150px', width: '1170px' }}
                                    />
                                </p>
                            </div>
                            <MovieRelated.Loading />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MovieDetail;
