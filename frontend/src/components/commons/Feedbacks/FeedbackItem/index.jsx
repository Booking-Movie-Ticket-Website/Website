import PropTypes from 'prop-types';

function FeedbackItem({ content, src, name, job }) {
    return (
        <div className="item">
            <div className="wrap-content">
                <p className="content">{content}</p>

                <div className="author">
                    <div className="wrap-image-info">
                        <div className="image">
                            <img decoding="async" src={src} alt={name} />
                        </div>

                        <div className="info">
                            <h3 className="name">{name}</h3>

                            <p className="job">{job}</p>
                        </div>
                    </div>

                    <div className="quote">
                        <i className="flaticon flaticon-quotes"></i>
                    </div>

                    <div className="background"></div>
                </div>
            </div>

            <div className="triangle-1"></div>
            <div className="triangle-2"></div>
        </div>
    );
}

export default FeedbackItem;

FeedbackItem.propTypes = {
    content: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
};
