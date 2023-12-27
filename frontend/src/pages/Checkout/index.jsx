import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '~/redux-toolkit/Breadcrumb/BreadcrumbSlice';
import axios from '~/utils/axios';
import { toast } from 'react-toastify';

function Checkout() {
    const bookingDataString = localStorage.getItem('booking') || '';
    const bookingData = bookingDataString.length > 0 ? JSON.parse(bookingDataString) : '';
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData('Checkout'));
    }, []);
    const handleCheckout = async () => {
        const accessToken = localStorage.getItem('accessToken');
        const bookingDataString = localStorage.getItem('booking') || '';
        const bookingData = bookingDataString.length > 0 ? JSON.parse(bookingDataString) : '';
        const postData = {
            showingId: bookingData.showingId,
            seatIds: bookingData.seats.map((item) => item.id),
        };
        await axios
            .post(`/bookings`, postData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then(() => {
                toast.success('Booking successfully!', {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true,
                });
                setTimeout(function () {
                    window.location.href = '/my-account';
                }, 1000); //
            })
            .catch((error) => {
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true,
                });
            });
    };
    return bookingDataString.length > 0 ? (
        <div className="row_site">
            <div className="container_site">
                <div id="main-content" className="main">
                    <header className="page-header">
                        <h1 className="page-title">Checkout</h1>
                    </header>
                    <article
                        id="post-11"
                        className="post-wrap  post-11 page type-page status-publish hentry"
                    >
                        <div className="woocommerce">
                            <div className="woocommerce-notices-wrapper"></div>
                            <form
                                name="checkout"
                                method="post"
                                className="checkout woocommerce-checkout"
                                encType="multipart/form-data"
                                noValidate="novalidate"
                            >
                                <h3 id="order_review_heading">Your order</h3>

                                <div
                                    id="order_review"
                                    className="woocommerce-checkout-review-order"
                                >
                                    <table className="shop_table woocommerce-checkout-review-order-table">
                                        <thead>
                                            <tr>
                                                <th className="product-name">Product</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="cart_item">
                                                <td className="product-name">
                                                    <a href={`/movie/${bookingData?.movieId}`}>
                                                        {bookingData?.name}&nbsp;
                                                    </a>
                                                    <strong className="product-quantity">
                                                        ×&nbsp;{bookingData?.quantity}
                                                    </strong>
                                                    <dl className="variation">
                                                        <dt className="variation-Date">
                                                            Date: {bookingData?.movieDate}
                                                        </dt>
                                                        <br />
                                                        <dt className="variation-Room">
                                                            Room: {bookingData?.roomName}
                                                        </dt>
                                                        <br />
                                                        <dt className="variation-Seat">Seat:</dt>
                                                        {bookingData?.seats?.map((item, index) => {
                                                            return index == 0 ? (
                                                                <span
                                                                    className="variation-Seat"
                                                                    key={item.id}
                                                                >
                                                                    {item.seatRow + item.seatColumn}
                                                                </span>
                                                            ) : (
                                                                <span
                                                                    className="variation-Seat"
                                                                    key={item.id}
                                                                >
                                                                    {', ' +
                                                                        item.seatRow +
                                                                        item.seatColumn}
                                                                </span>
                                                            );
                                                        })}
                                                    </dl>
                                                </td>
                                                <td className="product-total">
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            {bookingData.seats
                                                                .reduce(
                                                                    (total, seat) =>
                                                                        total + Number(seat.price),
                                                                    0,
                                                                )
                                                                .toLocaleString('en-US')}{' '}
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
                                                                {bookingData.seats
                                                                    .reduce(
                                                                        (total, seat) =>
                                                                            total +
                                                                            Number(seat.price),
                                                                        0,
                                                                    )
                                                                    .toLocaleString('en-US')}{' '}
                                                                VNĐ
                                                            </bdi>
                                                        </span>
                                                    </strong>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </form>

                            <button
                                type="submit"
                                className="button"
                                name="woocommerce_checkout_place_order"
                                id="place_order"
                                value="Place order"
                                data-value="Place order"
                                onClick={handleCheckout}
                            >
                                Place order
                            </button>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    ) : (
        <div className="row_site">
            <div className="container_site">Nothing to show</div>
        </div>
    );
}
export default Checkout;
