import { useEffect, useState } from 'react';
import axios from '~/utils/axios';

function MovieRelated({ movieCategories }) {
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
    const getAllMovies = () => {
        let result = '';
        for (const item of data) {
            result += `
                <div class="mb-movie-item item-template1">
                    <a
                        href=""
                        title=${item.name}
                    >
                        <div class="movie-image">
                            <img src=${item.moviePosters[0].link} alt=${item.name} />
                        </div>
                    </a>

                    <div class="movie-info">
                        <div class="categories-and-time">
                            <div class="movie-category">
                            ${item.movieCategories.map((item) => item.category.name).join(', ')}
                            </div>

                            <div class="separator">/</div>

                            <span class="running-time">${item.duration} Mins</span>
                        </div>

                        <a
                            href=""
                            title=${item.name}
                        >
                            <h3 class="movie-title">${item.name} </h3>
                        </a>

                        <button class="btn btn-booking" data-movie-id="4141">
                            Get Ticket
                        </button>
                    </div>
                </div>`;
        }
        return result;
    };
    return (
        <div className="movie-related">
            <h2 className="movie-title-h2 related-title">More Movies Like This</h2>
            <div
                className="mb-movie-list mb-movie-list-template1 four_column"
                dangerouslySetInnerHTML={{ __html: getAllMovies() }}
            />
        </div>
    );
}
export default MovieRelated;
