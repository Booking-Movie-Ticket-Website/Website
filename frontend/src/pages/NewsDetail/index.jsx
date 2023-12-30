import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '~/redux-toolkit/Breadcrumb/BreadcrumbSlice';
import axios from '~/utils/axios';

function NewsDetail() {
    const [data, setData] = useState('');
    const [posts, setPosts] = useState('');
    const dispatch = useDispatch();
    const postId = window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1);
    useEffect(() => {
        (async () => {
            await axios
                .get(`/news/${postId}`, {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((response) => {
                    setData(response);
                    dispatch(getData(response.title));
                })
                .catch((error) => console.error(error));
        })();
    }, []);
    useEffect(() => {
        (async () => {
            await axios
                .get(`/news?page=1&take=10`, {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((response) => {
                    setPosts(response.data);
                })
                .catch((error) => console.error(error));
        })();
    }, []);
    document.getElementsByTagName('body')[0].className =
        'blog wp-embed-responsive theme-aovis woocommerce-js chrome group-blog has-post-thumbnail layout_2r woo_layout_1c elementor-default elementor-kit-6 e--ua-blink e--ua-chrome e--ua-mac e--ua-webkit';
    return (
        data &&
        posts && (
            <div className="row_site">
                <div className="container_site">
                    <div id="main-content" className="main">
                        <article
                            id="post-3726"
                            className="post-wrap post-3726 post type-post status-publish format-standard has-post-thumbnail hentry category-fantasy category-movie category-tv-dramas tag-adventure tag-movie tag-tv-shows"
                        >
                            <div className="post-media">
                                <img
                                    width="770"
                                    height="500"
                                    src={data.newsPictures[0].link}
                                    className="img-responsive wp-post-image"
                                    alt=""
                                />
                            </div>

                            <h1 className="post-title">{data.title}</h1>

                            <div className="post-meta">
                                <ul className="post-meta">
                                    <li className="date">
                                        <i className="ovaicon-calendar-1"></i>
                                        December 4, 2023
                                    </li>
                                    <li className="comment">
                                        <i className="ovaicon-chat-comment-oval-speech-bubble-with-text-lines"></i>
                                        <a href="">0 Comments</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="post-content">
                                {data.fullDesc.split('<br>').map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                        </article>

                        <div id="comments" className="comments">
                            <div id="respond" className="comment-respond">
                                <h3 id="reply-title" className="comment-reply-title">
                                    Leave a Reply
                                    <small>
                                        <a
                                            rel="nofollow"
                                            id="cancel-comment-reply-link"
                                            href="/aovis/see-meila-enjoyable-capturing-moment/#respond"
                                            style={{ display: 'none' }}
                                        >
                                            Cancel reply
                                        </a>
                                    </small>
                                </h3>
                                <form
                                    action=""
                                    method="post"
                                    id="commentform"
                                    className="comment-form"
                                    noValidate=""
                                >
                                    <p className="comment-notes">
                                        <span id="email-notes">
                                            Your email address will not be published.
                                        </span>
                                        <span className="required-field-message">
                                            Required fields are marked
                                            <span className="required">*</span>
                                        </span>
                                    </p>

                                    <p className="comment-form-cookies-consent">
                                        <input
                                            id="wp-comment-cookies-consent"
                                            name="wp-comment-cookies-consent"
                                            type="checkbox"
                                            value="yes"
                                        />
                                        <label htmlFor="wp-comment-cookies-consent">
                                            Save my name, email, and website in this browser for the
                                            next time I comment.
                                        </label>
                                    </p>
                                    <div className="comment-form-info">
                                        <p className="comment-form-author">
                                            <input
                                                id="author"
                                                name="author"
                                                type="text"
                                                value=""
                                                placeholder="Name"
                                                size="20"
                                                maxLength="245"
                                                required="required"
                                            />
                                        </p>
                                        <p className="comment-form-email">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value=""
                                                size="20"
                                                maxLength="100"
                                                placeholder="Email"
                                                aria-describedby="email-notes"
                                                required="required"
                                            />
                                        </p>
                                        <p className="comment-form-url">
                                            <input
                                                id="url"
                                                name="url"
                                                type="url"
                                                value=""
                                                size="20"
                                                maxLength="200"
                                                placeholder="Website"
                                            />
                                        </p>
                                    </div>
                                    <p className="comment-form-comment">
                                        <textarea
                                            id="comment"
                                            name="comment"
                                            cols="45"
                                            rows="8"
                                            maxLength="65525"
                                            required="required"
                                            placeholder="Comment"
                                        ></textarea>
                                    </p>
                                    <p className="form-submit">
                                        <input
                                            name="submit"
                                            type="submit"
                                            id="submit"
                                            className="submit"
                                            value="Post Comment"
                                        />
                                        <input
                                            type="hidden"
                                            name="comment_post_ID"
                                            value="3726"
                                            id="comment_post_ID"
                                        />
                                        <input
                                            type="hidden"
                                            name="comment_parent"
                                            id="comment_parent"
                                            value="0"
                                        />
                                    </p>
                                </form>
                            </div>
                        </div>
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
                                                                {posts.map((item) =>
                                                                    item.id != postId ? (
                                                                        <div
                                                                            className="item"
                                                                            key={item.id}
                                                                        >
                                                                            <div className="media">
                                                                                <a
                                                                                    href=""
                                                                                    rel="bookmark"
                                                                                >
                                                                                    <img
                                                                                        src={
                                                                                            item
                                                                                                .newsPictures[0]
                                                                                                .link
                                                                                        }
                                                                                        alt=""
                                                                                    />
                                                                                </a>
                                                                            </div>

                                                                            <div className="info">
                                                                                <div className="item-meta">
                                                                                    <span className="left">
                                                                                        <i className="fas fa-comments"></i>
                                                                                    </span>
                                                                                    <span className="right">
                                                                                        <a href="">
                                                                                            0
                                                                                        </a>
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
                                                                    ) : (
                                                                        ''
                                                                    ),
                                                                )}
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

export default NewsDetail;
