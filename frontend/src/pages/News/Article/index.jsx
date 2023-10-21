import PropTypes from 'prop-types';

function Article({ id, title, srcImg, excerpt, category, releaseDate, author, numOfComments }) {
    const linkText = title.toLowerCase().replaceAll(' ', '-');
    return (
        <article
            id={`post-${id}`}
            className={`post-wrap  post-${id} post type-post status-publish format-standard has-post-thumbnail hentry category-fantasy category-movie category-tv-dramas tag-adventure tag-movie tag-tv-shows`}
        >
            <div className="post-media">
                <img
                    width="770"
                    height="500"
                    src={srcImg}
                    className="img-responsive wp-post-image"
                    alt=""
                    decoding="async"
                />
            </div>

            <a href={`/${linkText}`} rel="bookmark" title={title}>
                <h2 className="post-title">{title}</h2>
            </a>

            <ul className="post-meta">
                <li className="date">
                    <i className="ovaicon-calendar-1"></i> {releaseDate}
                </li>

                <li className="category">
                    <i className="ovaicon-folder-1"></i>
                    <a href="/category/fantasy"> {category}</a>
                </li>

                <li className="author">
                    <i className="ovaicon-user-1"></i>
                    <a href="/author/duong"> {author}</a>
                </li>

                <li className="comment">
                    <i className="ovaicon-chat-comment-oval-speech-bubble-with-text-lines"></i>
                    <a href={`/${linkText}/#respond`}> {numOfComments} Comments</a>
                </li>
            </ul>

            <div className="post-excerpt">
                <p>{excerpt}</p>
            </div>

            <a href={`/${linkText}`} className="btn readmore">
                Read more
            </a>
        </article>
    );
}

export default Article;

Article.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    srcImg: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    numOfComments: PropTypes.number.isRequired,
};