import PropTypes from 'prop-types';

function Photo({ src }) {
    return (
        <div className="gallery-box ">
            <a className="gallery-fancybox" data-index="1" href="javascript:;">
                <div className="list-gallery">
                    <div className="decor-line-1"></div>

                    <img decoding="async" src={src} alt="Gallery Slide" />

                    <div className="icon-box">
                        <i aria-hidden="true" className="fab fa-instagram"></i>
                    </div>

                    <div className="decor-line-2"></div>
                </div>
            </a>
        </div>
    );
}

export default Photo;

Photo.propTypes = {
    src: PropTypes.string.isRequired,
};
