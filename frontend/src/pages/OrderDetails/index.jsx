import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '~/redux-toolkit/Breadcrumb/BreadcrumbSlice';
import axios from '~/utils/axios';

function OrderDetails() {
    const [data, setData] = useState('');
    const dispatch = useDispatch();
    const orderId = window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1);
    useEffect(() => {
        (async () => {
            const accessToken = localStorage.getItem('accessToken');
            dispatch(getData('Order Details'));
            await axios
                .get(`/bookings/${orderId}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                .then((response) => {
                    setData(response);
                })
                .catch((error) => console.error(error));
        })();
    }, [orderId]);
    return (
        <div className="row_site">
            <div className="container_site">
                <div className="main">
                    <header className="page-header">
                        <h1 className="page-title">Order Details</h1>
                    </header>
                    {data ? (
                        <article
                            id="post-11"
                            className="post-wrap  post-11 page type-page status-publish hentry"
                            style={{ display: 'flex' }}
                        >
                            <div
                                className="woocommerce"
                                style={{ width: '45%', marginRight: '5%' }}
                            >
                                <div className="woocommerce-notices-wrapper"></div>
                                <div name="checkout" className="checkout woocommerce-checkout">
                                    <div
                                        id="order_review"
                                        className="woocommerce-checkout-review-order"
                                    >
                                        <table className="shop_table woocommerce-checkout-review-order-table">
                                            <thead>
                                                <tr>
                                                    <th className="product-name">Ticket</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="cart_item">
                                                    <td className="product-name">
                                                        <a
                                                            href={`/movie/${data?.showing?.movie?.id}`}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            {data?.showing?.movie?.name}&nbsp;
                                                        </a>
                                                        <strong className="product-quantity">
                                                            ×&nbsp;{data?.showingSeats?.length}
                                                        </strong>
                                                        <dl className="variation">
                                                            <dt className="variation-Date">
                                                                Order ID: {orderId}
                                                            </dt>
                                                            <br />
                                                            <dt className="variation-theater">
                                                                Theater:{' '}
                                                                {data.showing.room.theater.name}
                                                            </dt>
                                                            <br />
                                                            <dt className="variation-theater">
                                                                Address:{' '}
                                                                {data.showing.room.theater.address +
                                                                    ', ' +
                                                                    data.showing.room.theater.city}
                                                            </dt>
                                                            <br />
                                                            <dt className="variation-Date">
                                                                Date:{' '}
                                                                {new Date(
                                                                    data?.showing.startTime,
                                                                ).toLocaleString('en-US', {
                                                                    day: '2-digit',
                                                                    month: '2-digit',
                                                                    year: 'numeric',
                                                                    hour: '2-digit',
                                                                    minute: '2-digit',
                                                                    hour12: true,
                                                                })}
                                                            </dt>
                                                            <br />
                                                            <dt className="variation-Room">
                                                                Room: {data?.showing?.room.name}
                                                            </dt>
                                                            <br />
                                                            <dt className="variation-Seat">
                                                                Seat:
                                                            </dt>
                                                            {data?.showingSeats?.map(
                                                                (item, index) => {
                                                                    return index == 0 ? (
                                                                        <span
                                                                            className="variation-Seat"
                                                                            key={item.id}
                                                                        >
                                                                            {item.seat.seatRow +
                                                                                item.seat
                                                                                    .seatColumn}
                                                                        </span>
                                                                    ) : (
                                                                        <span
                                                                            className="variation-Seat"
                                                                            key={item.id}
                                                                        >
                                                                            {', ' +
                                                                                item.seat.seatRow +
                                                                                item.seat
                                                                                    .seatColumn}
                                                                        </span>
                                                                    );
                                                                },
                                                            )}
                                                        </dl>
                                                    </td>
                                                    <td className="product-total">
                                                        <span className="woocommerce-Price-amount amount">
                                                            <bdi>
                                                                {data?.totalPrice.toLocaleString(
                                                                    'en-US',
                                                                )}{' '}
                                                                VNĐ
                                                            </bdi>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr className="order-total">
                                                    <th>Total</th>
                                                    <td>
                                                        <strong>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    {data.totalPrice.toLocaleString(
                                                                        'en-US',
                                                                    )}{' '}
                                                                    VNĐ
                                                                </bdi>
                                                            </span>
                                                        </strong>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <img
                                alt={data.showing.movie.moviePosters.name}
                                src={
                                    data.showing.movie.moviePosters.filter(
                                        (item) => item.isThumb,
                                    )[0]?.link
                                }
                                style={{ width: '50%' }}
                            ></img>
                        </article>
                    ) : (
                        <div>No data to show</div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default OrderDetails;
