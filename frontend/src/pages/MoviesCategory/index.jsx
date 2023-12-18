import { useState, useEffect } from 'react';
import axios from '~/utils/axios';
import MovieItem from '../Home/TopFeaturedMovies/MovieItem';
import { getMovieData } from '~/redux-toolkit/HeaderBanner/HeaderBannerSlice';
import { useDispatch } from 'react-redux';
function MoviesCategory() {
    const [data, setData] = useState('');
    const dispatch = useDispatch();
    const categoryId = window.location.pathname.slice(
        window.location.pathname.lastIndexOf('/') + 1,
    );
    useEffect(() => {
        (async () => {
            await axios
                .get(`/movies?page=1&take=10&categoryId=${categoryId}&filterMovies=NOW_PLAYING/`, {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((response) => {
                    setData(response.data);
                    const randomNum = Math.round(Math.random() * (response.data.length - 1));
                    const movieData = {
                        movieId: null,
                        bannerRoute: response.data[randomNum].movieCategories.find(
                            (item) => item.categoryId == categoryId,
                        ).category.name,
                        movieSrc: response.data[randomNum].moviePosters.filter(
                            (item) => item.isThumb,
                        )[0].link,
                    };
                    dispatch(getMovieData(movieData));
                })
                .catch((error) => console.error(error));
        })();
    }, []);

    return (
        data && (
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-9845cb1 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="9845cb1"
                data-element_type="section"
            >
                <div className="elementor-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b01d768"
                        data-id="b01d768"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-53e9cce elementor-widget elementor-widget-movie_list"
                                data-id="53e9cce"
                                data-element_type="widget"
                                data-widget_type="movie_list.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="mb-movie-list mb-movie-list-template2 three_column">
                                        {data.map((item) => (
                                            <MovieItem key={item.id} data={item} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    );
}

export default MoviesCategory;
