import { useState, useEffect } from 'react';
import Article from './Article';
import { useDispatch } from 'react-redux';
import { getMovieData } from '~/redux-toolkit/HeaderBanner/HeaderBannerSlice';
import axios from '~/utils/axios';

function News() {
    const [data, setData] = useState('');
    const dispatch = useDispatch();
    dispatch(
        getMovieData({
            bannerRoute: 'News',
            movieSrc:
                'https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/background-header-2.jpg',
        }),
    );
    useEffect(() => {
        (async () => {
            await axios
                .get(`/news?page=1&take=10`, {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => console.error(error));
        })();
    }, []);

    document.getElementsByTagName('body')[0].className =
        'blog wp-embed-responsive theme-aovis woocommerce-js chrome group-blog has-post-thumbnail layout_2r woo_layout_1c elementor-default elementor-kit-6 e--ua-blink e--ua-chrome e--ua-mac e--ua-webkit';

    return (
        data && (
            <div className="row_site">
                <div className="container_site">
                    <div id="main-content" className="main">
                        <div className="blog_default">
                            {data.map((item) => (
                                <Article
                                    key={item.id}
                                    id={item.id}
                                    srcImg={item.newsPictures[0].link}
                                    title={item.title}
                                    releaseDate="December 4, 2023"
                                    excerpt={item.shortDesc}
                                />
                            ))}
                        </div>

                        <div className="pagination-wrapper"></div>
                    </div>

                    <aside id="sidebar" className="sidebar">
                        <div id="search-2" className="widget widget_search">
                            <form className="search-form">
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
                            <h4 className="widget-title">Latest Posts</h4>
                            <div className="textwidget">
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
                                                                {data.map((item) => (
                                                                    <div
                                                                        className="item"
                                                                        key={item.id}
                                                                    >
                                                                        <div className="media">
                                                                            <a
                                                                                href={`/blogs/${item.id}`}
                                                                                rel="bookmark"
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        item
                                                                                            .newsPictures[0]
                                                                                            .link
                                                                                    }
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
                                                                                    <a href="">0</a>
                                                                                </span>
                                                                                <span className="text-comment">
                                                                                    Comments
                                                                                </span>
                                                                            </div>

                                                                            <h4 className="post-title">
                                                                                <a
                                                                                    href={`/blogs/${item.id}`}
                                                                                    rel="bookmark"
                                                                                >
                                                                                    {item.title}
                                                                                </a>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                ))}
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
                    </aside>
                </div>
            </div>
        )
    );
}

export default News;
