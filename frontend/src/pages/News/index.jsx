import Article from './Article';
import { useDispatch } from 'react-redux';
import { getMovieData } from '~/redux-toolkit/HeaderBanner/HeaderBannerSlice';
function News() {
    const dispatch = useDispatch();
    dispatch(
        getMovieData({
            bannerRoute: 'News',
            movieSrc:
                'https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/background-header-2.jpg',
        }),
    );
    document.getElementsByTagName('body')[0].className =
        'blog wp-embed-responsive theme-aovis woocommerce-js chrome group-blog has-post-thumbnail layout_2r woo_layout_1c elementor-default elementor-kit-6 e--ua-blink e--ua-chrome e--ua-mac e--ua-webkit';

    return (
        <div className="row_site">
            <div className="container_site">
                <div id="main-content" className="main">
                    <div className="blog_default">
                        <Article
                            id={3726}
                            srcImg="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/blog-4.jpg"
                            title="See Meila enjoyable capturing moment"
                            category="Fantasy"
                            author="Duno"
                            releaseDate="March 23, 2023"
                            numOfComments={0}
                            excerpt="Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                            phaedrum. There are many variations of passages of Lorem Ipsum
                            available, but the majority have alteration in some injected or
                            words which don’t look even slightly believable."
                        />
                        <Article
                            id={3723}
                            srcImg="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/blog-5.jpg"
                            title="The Foreign Oscar Nominations 2023"
                            category="Fantasy"
                            author="Duno"
                            releaseDate="March 23, 2023"
                            numOfComments={0}
                            excerpt="Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                            phaedrum. There are many variations of passages of Lorem Ipsum
                            available, but the majority have alteration in some injected or
                            words which don’t look even slightly believable."
                        />
                        <Article
                            id={3718}
                            srcImg="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/blog-6.jpg"
                            title="Upcoming New Season 5 Just Flow in !"
                            category="Fantasy"
                            author="Duno"
                            releaseDate="March 23, 2023"
                            numOfComments={0}
                            excerpt="Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                            phaedrum. There are many variations of passages of Lorem Ipsum
                            available, but the majority have alteration in some injected or
                            words which don’t look even slightly believable."
                        />
                        <Article
                            id={1148}
                            srcImg="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/blog-1.jpg"
                            title="Hassle-free Streaming Experience"
                            category="Fantasy"
                            author="Duno"
                            releaseDate="March 23, 2023"
                            numOfComments={0}
                            excerpt="Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                            phaedrum. There are many variations of passages of Lorem Ipsum
                            available, but the majority have alteration in some injected or
                            words which don’t look even slightly believable."
                        />
                        <Article
                            id={1145}
                            srcImg="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/blog-2.jpg"
                            title="8 Films are Vying for the Foreign Oscar Nominations"
                            category="Movie"
                            author="Duno"
                            releaseDate="March 23, 2023"
                            numOfComments={0}
                            excerpt="Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                            phaedrum. There are many variations of passages of Lorem Ipsum
                            available, but the majority have alteration in some injected or
                            words which don’t look even slightly believable."
                        />
                        <Article
                            id={1137}
                            srcImg="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/blog-3.jpg"
                            title="Let this summer day never end !"
                            category="Fantasy"
                            author="duong"
                            releaseDate="March 23, 2023"
                            numOfComments={0}
                            excerpt="Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                            phaedrum. There are many variations of passages of Lorem Ipsum
                            available, but the majority have alteration in some injected or
                            words which don’t look even slightly believable."
                        />
                    </div>

                    <div className="pagination-wrapper"></div>
                </div>

                <aside id="sidebar" className="sidebar">
                    <div id="search-2" className="widget widget_search">
                        <form
                            role="search"
                            method="get"
                            className="search-form"
                            action="https://demo.ovatheme.com/aovis/"
                        >
                            <label>
                                <span className="screen-reader-text">Search for:</span>
                                <input
                                    type="search"
                                    className="search-field"
                                    placeholder="Search …"
                                    value=""
                                    name="s"
                                />
                            </label>
                            <input type="submit" className="search-submit" value="Search" />
                        </form>
                    </div>
                    <div id="text-2" className="widget widget_text">
                        <h4 className="widget-title">Latest Posts</h4>{' '}
                        <div className="textwidget">
                            {' '}
                            <div
                                data-elementor-type="section"
                                data-elementor-id="3709"
                                className="elementor elementor-3709"
                            >
                                <section
                                    className="elementor-section elementor-top-section elementor-element elementor-element-22cbe6d elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                    data-id="22cbe6d"
                                    data-element_type="section"
                                >
                                    <div className="elementor-container elementor-column-gap-no">
                                        <div
                                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4a0416b"
                                            data-id="4a0416b"
                                            data-element_type="column"
                                        >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div
                                                    className="elementor-element elementor-element-09458dd elementor-widget elementor-widget-aovis_elementor_latest_posts"
                                                    data-id="09458dd"
                                                    data-element_type="widget"
                                                    data-widget_type="aovis_elementor_latest_posts.default"
                                                >
                                                    <div className="elementor-widget-container">
                                                        <div className="ova-latest-posts">
                                                            <div className="item">
                                                                <div className="media">
                                                                    <a
                                                                        href="https://demo.ovatheme.com/aovis/see-meila-enjoyable-capturing-moment/"
                                                                        rel="bookmark"
                                                                        title="See Meila enjoyable capturing moment"
                                                                    >
                                                                        <img
                                                                            src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/blog-4-150x150.jpg"
                                                                            alt="See Meila enjoyable capturing moment"
                                                                        />
                                                                    </a>
                                                                </div>

                                                                <div className="info">
                                                                    <div className="item-meta">
                                                                        <span className="left">
                                                                            <i className="fas fa-comments"></i>
                                                                        </span>
                                                                        <span className="right">
                                                                            <a href="https://demo.ovatheme.com/aovis/see-meila-enjoyable-capturing-moment/#respond">
                                                                                0
                                                                            </a>
                                                                        </span>
                                                                        <span className="text-comment">
                                                                            Comments
                                                                        </span>
                                                                    </div>

                                                                    <h4 className="post-title">
                                                                        <a
                                                                            href="https://demo.ovatheme.com/aovis/see-meila-enjoyable-capturing-moment/"
                                                                            rel="bookmark"
                                                                            title="See Meila enjoyable capturing moment"
                                                                        >
                                                                            See Meila enjoyable
                                                                            capturing moment{' '}
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                            </div>

                                                            <div className="item">
                                                                <div className="media">
                                                                    <a
                                                                        href="https://demo.ovatheme.com/aovis/the-foreign-oscar-nominations/"
                                                                        rel="bookmark"
                                                                        title="The Foreign Oscar Nominations 2023"
                                                                    >
                                                                        <img
                                                                            src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/blog-5-150x150.jpg"
                                                                            alt="The Foreign Oscar Nominations 2023"
                                                                        />
                                                                    </a>
                                                                </div>

                                                                <div className="info">
                                                                    <div className="item-meta">
                                                                        <span className="left">
                                                                            <i className="fas fa-comments"></i>
                                                                        </span>
                                                                        <span className="right">
                                                                            <a href="https://demo.ovatheme.com/aovis/the-foreign-oscar-nominations/#respond">
                                                                                0
                                                                            </a>
                                                                        </span>
                                                                        <span className="text-comment">
                                                                            Comments
                                                                        </span>
                                                                    </div>

                                                                    <h4 className="post-title">
                                                                        <a
                                                                            href="https://demo.ovatheme.com/aovis/the-foreign-oscar-nominations/"
                                                                            rel="bookmark"
                                                                            title="The Foreign Oscar Nominations 2023"
                                                                        >
                                                                            The Foreign Oscar
                                                                            Nominations 2023{' '}
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                            </div>

                                                            <div className="item">
                                                                <div className="media">
                                                                    <a
                                                                        href="https://demo.ovatheme.com/aovis/upcoming-new-season-5-just-flow-in/"
                                                                        rel="bookmark"
                                                                        title="Upcoming New Season 5 Just Flow in !"
                                                                    >
                                                                        <img
                                                                            src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/blog-6-150x150.jpg"
                                                                            alt="Upcoming New Season 5 Just Flow in !"
                                                                        />
                                                                    </a>
                                                                </div>

                                                                <div className="info">
                                                                    <div className="item-meta">
                                                                        <span className="left">
                                                                            <i className="fas fa-comments"></i>
                                                                        </span>
                                                                        <span className="right">
                                                                            <a href="https://demo.ovatheme.com/aovis/upcoming-new-season-5-just-flow-in/#respond">
                                                                                0
                                                                            </a>
                                                                        </span>
                                                                        <span className="text-comment">
                                                                            Comments
                                                                        </span>
                                                                    </div>

                                                                    <h4 className="post-title">
                                                                        <a
                                                                            href="https://demo.ovatheme.com/aovis/upcoming-new-season-5-just-flow-in/"
                                                                            rel="bookmark"
                                                                            title="Upcoming New Season 5 Just Flow in !"
                                                                        >
                                                                            Upcoming New Season 5
                                                                            Just Flow in !{' '}
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div id="categories-2" className="widget widget_categories">
                        <h4 className="widget-title">Categories</h4>
                        <ul>
                            <li className="cat-item cat-item-54">
                                <a href="https://demo.ovatheme.com/aovis/category/fantasy/">
                                    Fantasy
                                </a>
                            </li>
                            <li className="cat-item cat-item-33">
                                <a href="https://demo.ovatheme.com/aovis/category/film/">Film</a>
                            </li>
                            <li className="cat-item cat-item-34">
                                <a href="https://demo.ovatheme.com/aovis/category/movie/">Movie</a>
                            </li>
                            <li className="cat-item cat-item-55">
                                <a href="https://demo.ovatheme.com/aovis/category/tv-dramas/">
                                    TV Dramas
                                </a>
                            </li>
                            <li className="cat-item cat-item-1">
                                <a href="https://demo.ovatheme.com/aovis/category/uncategorized/">
                                    Uncategorized
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="tag_cloud-2" className="widget widget_tag_cloud">
                        <h4 className="widget-title">Tags</h4>
                        <div className="tagcloud">
                            <a
                                href="https://demo.ovatheme.com/aovis/tag/adventure/"
                                className="tag-cloud-link tag-link-53 tag-link-position-1"
                                style={{ fontSize: '22pt' }}
                                aria-label="Adventure (6 items)"
                            >
                                Adventure
                            </a>
                            <a
                                href="https://demo.ovatheme.com/aovis/tag/film/"
                                className="tag-cloud-link tag-link-35 tag-link-position-2"
                                style={{ fontSize: '8pt' }}
                                aria-label="Film (2 items)"
                            >
                                Film
                            </a>
                            <a
                                href="https://demo.ovatheme.com/aovis/tag/movie/"
                                className="tag-cloud-link tag-link-36 tag-link-position-3"
                                style={{ fontSize: '16.324324324324pt' }}
                                aria-label="Movie (4 items)"
                            >
                                Movie
                            </a>
                            <a
                                href="https://demo.ovatheme.com/aovis/tag/tv-shows/"
                                className="tag-cloud-link tag-link-56 tag-link-position-4"
                                style={{ fontSize: '22pt' }}
                                aria-label="TV Shows (6 items)"
                            >
                                TV Shows
                            </a>
                        </div>
                    </div>{' '}
                </aside>
            </div>
        </div>
    );
}

export default News;
