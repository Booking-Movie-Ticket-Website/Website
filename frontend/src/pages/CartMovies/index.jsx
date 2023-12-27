import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '~/redux-toolkit/Breadcrumb/BreadcrumbSlice';
import axios from '~/utils/axios';
import { toast } from 'react-toastify';

function CartMovies() {
    const [showingData, setShowingData] = useState('');
    const [bookingList, setBookingList] = useState([]);
    const [isBooking, setBooking] = useState(false);
    const seatRefs = useRef([]);
    const dispatch = useDispatch();
    const showingId = window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1);
    useEffect(() => {
        (async () => {
            dispatch(getData('Cart Movies'));
            await axios
                .get(`showings/${showingId}`, {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((response) => {
                    setShowingData(response);
                })
                .catch((error) => console.error(error));
        })();
    }, []);
    const handleChooseSeat = (seatData) => {
        if (seatRefs[seatData.id].classList.value.includes('booked')) {
            toast.error('Seat booked!', {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
            });
        } else if (
            seatRefs[seatData.id].classList.value.includes('checked') &&
            seatData.type == 'standard'
        ) {
            seatRefs[seatData.id].classList.remove('checked');
            const newBookingList = bookingList.filter((item) => item.id != seatData.id);
            setBookingList(newBookingList);
        } else if (
            seatRefs[seatData.id].classList.value.includes('checked') &&
            seatData.type == 'couple'
        ) {
            seatRefs[seatData.id].classList.remove('checked');
            seatRefs[seatData.pairWith].classList.remove('checked');
            let newBookingList = bookingList.filter((item) => item.id != seatData.id);
            newBookingList = newBookingList.filter((item) => item.id != seatData.pairWith);
            setBookingList(newBookingList);
        } else if (seatData.type == 'couple') {
            seatRefs[seatData.id].classList.add('checked');
            seatRefs[seatData.pairWith].classList.add('checked');
            const coupleSeatData = showingData.showingSeats.filter(
                (item) => item.id == seatData.pairWith,
            );
            setBooking(true);
            setBookingList((pre) => [...pre, seatData, coupleSeatData[0]]);
        } else {
            seatRefs[seatData.id].classList.add('checked');
            setBooking(true);
            setBookingList((pre) => [...pre, seatData]);
        }
    };
    const handleSeatColumn = (seatArray) => {
        let maxColumn = Number(seatArray[0].seatColumn);
        for (let i = 0; i < seatArray.length; i++) {
            if (Number(seatArray[i].seatColumn) > Number(maxColumn)) {
                maxColumn = Number(seatArray[i].seatColumn);
            }
        }
        return maxColumn;
    };
    const handleCheckout = () => {
        const movieDate = new Date(showingData.startTime);
        let utcHours =
            movieDate.getUTCHours() >= 10 ? movieDate.getUTCHours() : '0' + movieDate.getUTCHours();
        let utcMinutes =
            movieDate.getUTCMinutes() >= 10
                ? movieDate.getUTCMinutes()
                : '0' + movieDate.getUTCMinutes();
        let showTime = utcHours + ':' + utcMinutes;
        showTime += movieDate.getUTCHours() <= 11 ? ' AM' : ' PM';
        const bookingData = {
            showingId: showingId,
            movieId: showingData.movie.id,
            quantity: bookingList.length,
            name: showingData.movie.name,
            roomName: showingData.room.name,
            movieDate:
                movieDate.getDate() +
                '/' +
                (movieDate.getMonth() + 1) +
                '/' +
                movieDate.getFullYear() +
                ' ' +
                showTime,
            seats: bookingList,
        };
        const bookingDataString = JSON.stringify(bookingData);
        localStorage.setItem('booking', bookingDataString);
    };
    useEffect(() => {
        if (bookingList.length === 0) setBooking(false);
    }, [bookingList]);
    return (
        showingData && (
            <div
                data-elementor-type="wp-page"
                data-elementor-id="3729"
                className="elementor elementor-3729"
            >
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-757a1704 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="757a1704"
                    data-element_type="section"
                >
                    <div className="elementor-container elementor-column-gap-default">
                        <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a095e7"
                            data-id="a095e7"
                            data-element_type="column"
                        >
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                    className="elementor-element elementor-element-2cb76e08 elementor-widget elementor-widget-text-editor"
                                    data-id="2cb76e08"
                                    data-element_type="widget"
                                    data-widget_type="text-editor.default"
                                >
                                    <div className="elementor-widget-container">
                                        <h2>Choose Seat</h2>
                                        <article id="mb_cart" className="cart_detail">
                                            <div className="cart-content">
                                                <div className="box">
                                                    <div className="screen">SCREEN</div>
                                                    <div
                                                        style={{
                                                            gridTemplateColumns: `repeat(${handleSeatColumn(
                                                                showingData.showingSeats,
                                                            )}, 7fr)`,
                                                        }}
                                                        className="seat-content"
                                                    >
                                                        {showingData.showingSeats.map(
                                                            (item, index) => {
                                                                return (
                                                                    <div
                                                                        key={index}
                                                                        className={
                                                                            item.type == 'couple'
                                                                                ? 'seat-item couple'
                                                                                : 'seat-item'
                                                                        }
                                                                        onClick={() =>
                                                                            handleChooseSeat(item)
                                                                        }
                                                                        ref={(e) =>
                                                                            (seatRefs[item.id] = e)
                                                                        }
                                                                    >
                                                                        {item.seatRow +
                                                                            item.seatColumn}
                                                                    </div>
                                                                );
                                                            },
                                                        )}
                                                    </div>
                                                    <ul className="seat-instruction">
                                                        <li className="available">
                                                            <span className="box"></span>
                                                            <span className="text">Available</span>
                                                        </li>
                                                        <li className="booked">
                                                            <span className="box"></span>
                                                            <span className="text">Booked</span>
                                                        </li>
                                                        <li className="couple">
                                                            <span className="box"></span>
                                                            <span className="text">Couple</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="cart-sidebar">
                                                <div className="cart-info">
                                                    <div className="wp-cart-info">
                                                        <h3 className="cart_title">
                                                            <span className="title">
                                                                Booking Information
                                                            </span>
                                                        </h3>
                                                        <div className="content-cart-info">
                                                            <span
                                                                className="placeholder"
                                                                style={{
                                                                    display: isBooking
                                                                        ? 'none'
                                                                        : 'block',
                                                                }}
                                                            >
                                                                Please Select Your Seat
                                                            </span>
                                                            <div
                                                                className="item-info item-header"
                                                                style={{
                                                                    display: isBooking
                                                                        ? 'flex'
                                                                        : 'none',
                                                                }}
                                                            >
                                                                <span>Seat</span>
                                                                <span>Price</span>
                                                            </div>
                                                            <div
                                                                className="wp-content-item"
                                                                style={{
                                                                    display: isBooking
                                                                        ? ''
                                                                        : 'none',
                                                                }}
                                                            >
                                                                <div
                                                                    className="item-info item-info-map"
                                                                    data-qty="0"
                                                                    data-price="0"
                                                                >
                                                                    <div className="info-type-ticket">
                                                                        <div className="wp-seat-info">
                                                                            {bookingList.map(
                                                                                (seat, index) => (
                                                                                    <span
                                                                                        key={index}
                                                                                        className="seat-0"
                                                                                    >
                                                                                        {seat.seatRow +
                                                                                            seat.seatColumn}
                                                                                    </span>
                                                                                ),
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className="info-sub-price">
                                                                        {bookingList
                                                                            .reduce(
                                                                                (total, seat) =>
                                                                                    total +
                                                                                    Number(
                                                                                        seat.price,
                                                                                    ),
                                                                                0,
                                                                            )
                                                                            .toLocaleString(
                                                                                'en-US',
                                                                            )}{' '}
                                                                        VNĐ
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="total-cart-info" data-total="0">
                                                        <span className="text">Total</span>
                                                        <span className="total-price">
                                                            {bookingList
                                                                .reduce(
                                                                    (total, seat) =>
                                                                        total + Number(seat.price),
                                                                    0,
                                                                )
                                                                .toLocaleString('en-US')}{' '}
                                                            VNĐ
                                                        </span>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`cart-checkout ${
                                                        isBooking ? '' : 'mb-disable'
                                                    }`}
                                                    id="mb-btn-checkout"
                                                >
                                                    <div className="submit-load-more">
                                                        <div className="load-more">
                                                            <div className="lds-spinner">
                                                                <div></div>
                                                                <div></div>
                                                                <div></div>
                                                                <div></div>
                                                                <div></div>
                                                                <div></div>
                                                                <div></div>
                                                                <div></div>
                                                                <div></div>
                                                                <div></div>
                                                                <div></div>
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <input
                                                        type="hidden"
                                                        name="mb_checkout_nonce"
                                                        id="mb_checkout_nonce"
                                                        value="aa0ba93c9a"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="login-required"
                                                        value=""
                                                    />
                                                    <a
                                                        id="btn-checkout"
                                                        onClick={handleCheckout}
                                                        href="/checkout"
                                                    >
                                                        Proceed to checkout
                                                    </a>
                                                </div>
                                                <span className="cart-error">
                                                    Please select seat
                                                </span>
                                                <div className="message-error">
                                                    <a
                                                        className="mb-auto-reload"
                                                        onClick="window.location.reload(true);"
                                                        href=""
                                                    ></a>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    );
}

export default CartMovies;
