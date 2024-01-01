import { useState, useEffect, useRef } from 'react';
import axios from '~/utils/axios';
import userImage from '~/assets/images/user-img.png';
import { toast } from 'react-toastify';

function MovieReview({ movieId }) {
    const [data, setData] = useState('');
    const [review, setReview] = useState();
    const [star, setStar] = useState();
    const reviewStar = useRef([]);
    const accessToken = localStorage.getItem('accessToken');
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
    const handleReview = async () => {
        const data = {
            movieId: movieId,
            description: review,
            star: Number(star),
        };
        await axios
            .post(`/reviews`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then(() => {
                toast.success('Comment successfully!', {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true,
                });
                location.reload();
            })
            .catch((error) => {
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true,
                });
            });
    };
    const handleStar = (index) => {
        for (let i = 0; i < 5; i++) {
            reviewStar[i].classList.remove('active-star');
        }
        for (let i = 0; i <= index; i++) {
            reviewStar[i].classList.add('active-star');
        }
        setStar(index + 1);
    };
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
                                    <div className="username">
                                        {item.createdUser.firstName +
                                            ' ' +
                                            item.createdUser.lastName}
                                    </div>
                                    <div className="star-content">
                                        {Array(5)
                                            .fill(0)
                                            .map((ele, index) => {
                                                return index < item.star ? (
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
            <div>
                <div className="" style={{ display: 'flex' }}>
                    <img
                        style={{ width: '3.5vw', height: '3.5vw', marginRight: '1vw' }}
                        src={userImage}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1vw' }}>
                        <div
                            style={{
                                marginBottom: '10px',
                            }}
                        >
                            {Array(5)
                                .fill(0)
                                .map((item, index) => {
                                    return (
                                        <i
                                            className="fa fa-star"
                                            key={index}
                                            style={{ marginRight: '2px' }}
                                            ref={(e) => (reviewStar[index] = e)}
                                            onClick={() => handleStar(index)}
                                        ></i>
                                    );
                                })}
                        </div>
                        <textarea
                            placeholder="Type your review..."
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        />
                    </div>
                </div>
                <button onClick={handleReview}>Comment</button>
            </div>
        </div>
    );
}
export default MovieReview;
