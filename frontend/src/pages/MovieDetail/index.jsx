import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '~/utils/axios';
import MovieTopCast from './MovieTopCast';
import MovieRelated from './MovieRelated';
import MovieTopContent from './MovieTopContent';
import { useDispatch } from 'react-redux';
import { getMovieData } from '~/redux-toolkit/HeaderBanner/HeaderBannerSlice';
function MovieDetail() {
    const [data, setData] = useState('');
    const location = useLocation();
    const dispatch = useDispatch();
    const currentPath = location.pathname;
    const movieId = currentPath.slice(currentPath.lastIndexOf('/') + 1);
    useEffect(() => {
        (async () => {
            await axios
                .get(`/movies/${movieId}`, {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((response) => {
                    setData(response);
                    dispatch(getMovieData(response));
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
                ''
            )}
        </>
    );
}

export default MovieDetail;
