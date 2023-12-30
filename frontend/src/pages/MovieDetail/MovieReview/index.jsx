import { useState, useEffect } from 'react';
import axios from '~/utils/axios';
import userImage from '~/assets/images/user-img.png';
function MovieReview({ movieId }) {
    const [data, setData] = useState('');
    useEffect(() => {
        (async () => {
            await axios
                .get(`/reviews/${movieId}`, {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((response) => {
                    setData(response);
                })
                .catch((error) => console.error(error));
        })();
    }, []);
    return (
        <div className="movie-review">
            <h2 className="movie-title-h2 related-title">Movie Reviews</h2>
            <div className="main-content">
                {data.length > 0 ? (
                    data.map((item, index) => {
                        return (
                            <div key={index} className="content">
                                <div className="left">
                                    <img className="user-image" src={userImage} />
                                </div>
                                <div className="right">
                                    <div className="username">User {item.id}</div>
                                    <div className="star-content">
                                        {Array(5)
                                            .fill(0)
                                            .map((ele, index) => {
                                                return index < item.star - 1 ? (
                                                    <i
                                                        className="fa fa-star"
                                                        style={{
                                                            color: '#f3da35',
                                                            marginRight: '2px',
                                                        }}
                                                    ></i>
                                                ) : (
                                                    <i className="fa fa-star"></i>
                                                );
                                            })}
                                    </div>
                                    <div className="review-description">{item.description}</div>
                                    <div className="review-date">
                                        {new Date(item.createdAt).toLocaleString('en-US', {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: true,
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="no-review">No reviews have been posted for this movie yet</div>
                )}
            </div>
        </div>
    );
}
export default MovieReview;
