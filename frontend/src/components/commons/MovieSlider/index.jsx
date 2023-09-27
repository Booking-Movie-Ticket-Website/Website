import Carousel from './Carousel';
import TrailerSlider from './Carousel/TrailerSlider';

function MovieSlider() {
    return (
        <section id="movie-slider" className="carousel slide" data-bs-ride="carousel">
            <div className="container">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#movie-slider"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#movie-slider"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#movie-slider"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <Carousel />
            </div>
            <TrailerSlider />
        </section>
    );
}

export default MovieSlider;
