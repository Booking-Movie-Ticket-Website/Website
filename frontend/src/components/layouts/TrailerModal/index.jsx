import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '~/redux-toolkit/TrailerVideo/TrailerVideoSlice';
function TrailerModal() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.trailervideo.isOpen);
    const trailerData = useSelector((state) => state.trailervideo.videoData);
    const closeTrailerModal = () => {
        dispatch(closeModal());
    };
    return (
        isOpen && (
            <div className="mb_trailer_video_popup">
                <div className="modal-container">
                    <div className="modal">
                        <i className="ovaicon-cancel" onClick={closeTrailerModal}></i>
                        <div className="modal-content">
                            <div dangerouslySetInnerHTML={{ __html: trailerData }}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}
export default TrailerModal;
