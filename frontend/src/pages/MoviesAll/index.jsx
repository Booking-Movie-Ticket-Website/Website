import MovieItem from './MovieItem';

function MoviesAll() {
    return (
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
                                    <MovieItem />
                                    <MovieItem />
                                    <MovieItem />
                                    <MovieItem />
                                    <MovieItem />
                                    <MovieItem />
                                    <MovieItem />
                                    <MovieItem />
                                    <MovieItem />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MoviesAll;
