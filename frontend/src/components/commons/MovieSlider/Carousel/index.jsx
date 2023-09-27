import banner1 from '~/assets/images/banner1.jpg';
import banner2 from '~/assets/images/banner2.jpg';
import banner3 from '~/assets/images/banner3.jpg';
import CarouselInfo from './Carouselnfo';

function Carousel() {
    return (
        <div className="carousel-inner">
            <div className="carousel-item position-relative active">
                <img src={banner1} className="d-block w-100" alt="" />
                <CarouselInfo />
            </div>
            <div className="carousel-item position-relative">
                <img src={banner2} className="d-block w-100" alt="" />
                <div className="movie-social-sharing d-flex">
                    <span className="text-share text-white d-inline-block">Share</span>
                    <span className="line d-inline-block"></span>
                    <ul className="share-social-icons clearfix m-0 p-0 list-unstyled">
                        <li>
                            <a
                                className="share-ico ico-twitter"
                                // target="_blank"
                                href="https://twitter.com/share?url=https://demo.ovatheme.com/aovis/movie/love-nightmare/&amp;text=Love+Nightmare&amp;hashtags=simplesharebuttons"
                                tabIndex="0"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                className="share-ico ico-facebook"
                                // target="_blank"
                                href="https://www.facebook.com/sharer.php?u=https://demo.ovatheme.com/aovis/movie/love-nightmare/"
                                tabIndex="0"
                            >
                                <i className="fa fa-facebook"></i>
                            </a>
                        </li>

                        <li>
                            <a
                                className="share-ico ico-pinterest"
                                // target="_blank"
                                href="https://pinterest.com/pin/create/button/?url=https://demo.ovatheme.com/aovis/movie/love-nightmare/"
                                title="Love Nightmare"
                                tabIndex="0"
                            >
                                <i className="fab fa-pinterest-p"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="movie-main-item-container row_site position-relative user-select-none">
                    <div className="movie-release">
                        <span className="text-white">In theater</span>
                        <h3 className="time position-relative text-white m-0">March 2023</h3>
                    </div>
                    <div className="movie-main-item position-relative">
                        <div className="movie-heading position-relative">
                            <h3 className="movie-category">Action Movie</h3>

                            <a
                                href="https://demo.ovatheme.com/aovis/movie/love-nightmare/"
                                title="Love Nightmare"
                                tabIndex="-1"
                            >
                                <h1 className="movie-title text-white text-capitalize">
                                    The Witcher Season 2
                                </h1>
                            </a>
                        </div>

                        <p className="movie-excerpt text-white">
                            Writen and Directed by Aleesha Rose / Ireland 2023
                        </p>

                        <div className="button-wrapper">
                            <a
                                href="https://demo.ovatheme.com/aovis/movie/love-nightmare/"
                                title="Love Nightmare"
                                tabIndex="-1"
                            >
                                <button className="btn btn-more-info" tabIndex="-1">
                                    More Info
                                </button>
                            </a>

                            <button className="btn btn-booking" data-movie-id="1024" tabIndex="-1">
                                Get Ticket
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item position-relative">
                <img src={banner3} className="d-block w-100" alt="" />
                <div className="movie-social-sharing d-flex">
                    <span className="text-share text-white d-inline-block">Share</span>
                    <span className="line d-inline-block"></span>
                    <ul className="share-social-icons clearfix m-0 p-0 list-unstyled">
                        <li>
                            <a
                                className="share-ico ico-twitter"
                                // target="_blank"
                                href="https://twitter.com/share?url=https://demo.ovatheme.com/aovis/movie/love-nightmare/&amp;text=Love+Nightmare&amp;hashtags=simplesharebuttons"
                                tabIndex="0"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                className="share-ico ico-facebook"
                                // target="_blank"
                                href="https://www.facebook.com/sharer.php?u=https://demo.ovatheme.com/aovis/movie/love-nightmare/"
                                tabIndex="0"
                            >
                                <i className="fa fa-facebook"></i>
                            </a>
                        </li>

                        <li>
                            <a
                                className="share-ico ico-pinterest"
                                // target="_blank"
                                href="https://pinterest.com/pin/create/button/?url=https://demo.ovatheme.com/aovis/movie/love-nightmare/"
                                title="Love Nightmare"
                                tabIndex="0"
                            >
                                <i className="fab fa-pinterest-p"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="movie-main-item-container row_site position-relative user-select-none">
                    <div className="movie-release">
                        <span className="text-white">In theater</span>
                        <h3 className="time position-relative text-white m-0">March 2023</h3>
                    </div>
                    <div className="movie-main-item position-relative">
                        <div className="movie-heading position-relative">
                            <h3 className="movie-category">Adventure Movie</h3>

                            <a
                                href="https://demo.ovatheme.com/aovis/movie/love-nightmare/"
                                title="Love Nightmare"
                                tabIndex="-1"
                            >
                                <h1 className="movie-title text-white text-capitalize">
                                    Love Nightmare
                                </h1>
                            </a>
                        </div>

                        <p className="movie-excerpt text-white">
                            Writen and Directed by Aleesha Rose / Ireland 2023
                        </p>

                        <div className="button-wrapper">
                            <a
                                href="https://demo.ovatheme.com/aovis/movie/love-nightmare/"
                                title="Love Nightmare"
                                tabIndex="-1"
                            >
                                <button className="btn btn-more-info" tabIndex="-1">
                                    More Info
                                </button>
                            </a>

                            <button className="btn btn-booking" data-movie-id="1024" tabIndex="-1">
                                Get Ticket
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
