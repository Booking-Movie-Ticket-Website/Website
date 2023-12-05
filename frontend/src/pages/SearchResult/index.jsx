import { useState, useEffect } from 'react';
import axios from '~/utils/axios';
import MovieItem from '../Home/TopFeaturedMovies/MovieItem';
import { getMovieData } from '~/redux-toolkit/HeaderBanner/HeaderBannerSlice';
import { useDispatch } from 'react-redux';
function SearchResult() {
    const [data, setData] = useState('');
    const dispatch = useDispatch();
    const searchName = window.location.pathname.slice(
        window.location.pathname.lastIndexOf('/') + 1,
    );
    useEffect(() => {
        (async () => {
            await axios
                .get(`/movies?page=1&take=10&name=${searchName}`, {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((response) => {
                    setData(response.data);
                    if (response.data[0]) {
                        const randomNum = Math.round(Math.random() * (response.data.length - 1));
                        const movieData = {
                            movieId: null,
                            bannerRoute: 'All Movies',
                            movieSrc: response.data[randomNum].moviePosters[0].link,
                        };
                        dispatch(getMovieData(movieData));
                    } else if (!response.data[0]) {
                        dispatch(
                            getMovieData({
                                bannerRoute: 'All Movies',
                                movieSrc:
                                    'https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/background-header-2.jpg',
                            }),
                        );
                    }
                })
                .catch((error) => console.error(error));
        })();
    }, []);

    return data[0] ? (
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
                                <header className="page-header">
                                    <h1 className="page-title">
                                        Search Results for: <span>{searchName}</span>{' '}
                                    </h1>
                                </header>
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
    ) : (
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
                                <header className="page-header">
                                    <h1 className="page-title">
                                        Search Results for: <span>{searchName}</span>{' '}
                                    </h1>
                                </header>
                                <div>No data</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SearchResult;
