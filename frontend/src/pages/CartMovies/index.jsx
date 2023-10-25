import { useEffect, useState } from 'react';
import Seat from './Seat';
import { vipSeats, premiumSeats, specialSeats, standardSeats, bookedList } from './seats';

function CartMovies() {
    const [bookingList, setBookingList] = useState([]);
    const [isBooking, setBooking] = useState(false);

    const updatedBookingList = (newBookingSeat) => {
        if (!isBooking) setBooking(true);
        setBookingList((prev) => {
            const isSeatAlreadyBooked = prev.some((seat) => seat.id === newBookingSeat.id);
            if (isSeatAlreadyBooked) {
                return prev.filter((seat) => seat.id !== newBookingSeat.id);
            } else {
                return [...prev, newBookingSeat];
            }
        });
    };

    useEffect(() => {
        if (bookingList.length === 0) setBooking(false);
    }, [bookingList]);

    return (
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
                                    <p> </p>
                                    <div className="mb-cart-header"></div>
                                    <article id="mb_cart" className="cart_detail">
                                        <input
                                            type="hidden"
                                            id="cart-data"
                                            name="cart-data"
                                            data-sid="4713"
                                            data-rid="4372"
                                            data-tax-fee=""
                                            data-tax-type="percent"
                                            data-tax-incl="no"
                                            data-ticket-fee=""
                                            data-ticket-fee-type="percent"
                                            data-currency-settings='{"currency":"$","currency_position":"left","thousand_separator":",","decimal_separator":".","number_decimals":2}'
                                        />
                                        <div className="cart-content">
                                            <div className="mb-seat-map">
                                                <div>
                                                    <div
                                                        id="image-map-pro-7947"
                                                        data-image-map-id="7947"
                                                        data-image-map-name="Seat Map 01"
                                                    >
                                                        <div
                                                            className="imp-container imp-ui-light"
                                                            style={{ width: '750px' }}
                                                        >
                                                            <div className="imp-ui-wrap">
                                                                <div className="imp-ui">
                                                                    <div className="imp-ui-top-right">
                                                                        <div></div>
                                                                    </div>
                                                                    <div className="imp-ui-top-left"></div>
                                                                    <div className="imp-ui-bottom-right">
                                                                        <div
                                                                            data-imp-id="7947"
                                                                            data-element-name="fullscreenButton"
                                                                            style={{
                                                                                display: 'none',
                                                                            }}
                                                                            className="imp-ui-element imp-fullscreen-button"
                                                                        >
                                                                            <svg
                                                                                className="imp-icon"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 448 512"
                                                                            >
                                                                                <path d="M128 32H32C14.31 32 0 46.31 0 64v96c0 17.69 14.31 32 32 32s32-14.31 32-32V96h64c17.69 0 32-14.31 32-32S145.7 32 128 32zM416 32h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V64C448 46.31 433.7 32 416 32zM128 416H64v-64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32S145.7 416 128 416zM416 320c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96C448 334.3 433.7 320 416 320z"></path>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="imp-ui-bottom-left">
                                                                        <div></div>
                                                                    </div>
                                                                </div>
                                                                <div className="imp-canvas-wrap">
                                                                    <div
                                                                        className="imp-canvas"
                                                                        style={{
                                                                            width: '750px',
                                                                            height: '697.79px',
                                                                        }}
                                                                    >
                                                                        <div className="imp-translate">
                                                                            <div className="imp-scale">
                                                                                <img
                                                                                    src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/04/seat_map.jpeg"
                                                                                    className="imp-image"
                                                                                />
                                                                                <div className="imp-objects">
                                                                                    {vipSeats.map(
                                                                                        (
                                                                                            vipSeat,
                                                                                        ) => (
                                                                                            <Seat
                                                                                                key={
                                                                                                    vipSeat.id
                                                                                                }
                                                                                                seatId={
                                                                                                    vipSeat.id
                                                                                                }
                                                                                                objectId={
                                                                                                    vipSeat.objectId
                                                                                                }
                                                                                                type="VIP"
                                                                                                price={
                                                                                                    50
                                                                                                }
                                                                                                isBooking={
                                                                                                    bookingList
                                                                                                        ? bookingList.some(
                                                                                                              (
                                                                                                                  seat,
                                                                                                              ) =>
                                                                                                                  seat.id ===
                                                                                                                  vipSeat.id,
                                                                                                          )
                                                                                                        : ''
                                                                                                }
                                                                                                isBooked={
                                                                                                    bookedList
                                                                                                        ? bookedList.some(
                                                                                                              (
                                                                                                                  id,
                                                                                                              ) =>
                                                                                                                  id ===
                                                                                                                  vipSeat.id,
                                                                                                          )
                                                                                                        : ''
                                                                                                }
                                                                                                updateBookingList={
                                                                                                    updatedBookingList
                                                                                                }
                                                                                            />
                                                                                        ),
                                                                                    )}

                                                                                    {premiumSeats.map(
                                                                                        (
                                                                                            premiumSeat,
                                                                                        ) => (
                                                                                            <Seat
                                                                                                key={
                                                                                                    premiumSeat.id
                                                                                                }
                                                                                                seatId={
                                                                                                    premiumSeat.id
                                                                                                }
                                                                                                objectId={
                                                                                                    premiumSeat.objectId
                                                                                                }
                                                                                                type="PREMIUM"
                                                                                                price={
                                                                                                    40
                                                                                                }
                                                                                                isBooking={
                                                                                                    bookingList
                                                                                                        ? bookingList.some(
                                                                                                              (
                                                                                                                  seat,
                                                                                                              ) =>
                                                                                                                  seat.id ===
                                                                                                                  premiumSeat.id,
                                                                                                          )
                                                                                                        : ''
                                                                                                }
                                                                                                isBooked={
                                                                                                    bookedList
                                                                                                        ? bookedList.some(
                                                                                                              (
                                                                                                                  id,
                                                                                                              ) =>
                                                                                                                  id ===
                                                                                                                  premiumSeat.id,
                                                                                                          )
                                                                                                        : ''
                                                                                                }
                                                                                                updateBookingList={
                                                                                                    updatedBookingList
                                                                                                }
                                                                                            />
                                                                                        ),
                                                                                    )}

                                                                                    {specialSeats.map(
                                                                                        (
                                                                                            specialSeat,
                                                                                        ) => (
                                                                                            <Seat
                                                                                                key={
                                                                                                    specialSeat.id
                                                                                                }
                                                                                                seatId={
                                                                                                    specialSeat.id
                                                                                                }
                                                                                                objectId={
                                                                                                    specialSeat.objectId
                                                                                                }
                                                                                                type="SPECIAL"
                                                                                                price={
                                                                                                    30
                                                                                                }
                                                                                                isBooking={
                                                                                                    bookingList
                                                                                                        ? bookingList.some(
                                                                                                              (
                                                                                                                  seat,
                                                                                                              ) =>
                                                                                                                  seat.id ===
                                                                                                                  specialSeat.id,
                                                                                                          )
                                                                                                        : ''
                                                                                                }
                                                                                                isBooked={
                                                                                                    bookedList
                                                                                                        ? bookedList.some(
                                                                                                              (
                                                                                                                  id,
                                                                                                              ) =>
                                                                                                                  id ===
                                                                                                                  specialSeat.id,
                                                                                                          )
                                                                                                        : ''
                                                                                                }
                                                                                                updateBookingList={
                                                                                                    updatedBookingList
                                                                                                }
                                                                                            />
                                                                                        ),
                                                                                    )}

                                                                                    {standardSeats.map(
                                                                                        (
                                                                                            standardSeat,
                                                                                        ) => (
                                                                                            <Seat
                                                                                                key={
                                                                                                    standardSeat.id
                                                                                                }
                                                                                                seatId={
                                                                                                    standardSeat.id
                                                                                                }
                                                                                                objectId={
                                                                                                    standardSeat.objectId
                                                                                                }
                                                                                                type="STANDARD"
                                                                                                price={
                                                                                                    20
                                                                                                }
                                                                                                isBooking={
                                                                                                    bookingList
                                                                                                        ? bookingList.some(
                                                                                                              (
                                                                                                                  seat,
                                                                                                              ) =>
                                                                                                                  seat.id ===
                                                                                                                  standardSeat.id,
                                                                                                          )
                                                                                                        : ''
                                                                                                }
                                                                                                isBooked={
                                                                                                    bookedList
                                                                                                        ? bookedList.some(
                                                                                                              (
                                                                                                                  id,
                                                                                                              ) =>
                                                                                                                  id ===
                                                                                                                  standardSeat.id,
                                                                                                          )
                                                                                                        : ''
                                                                                                }
                                                                                                updateBookingList={
                                                                                                    updatedBookingList
                                                                                                }
                                                                                            />
                                                                                        ),
                                                                                    )}
                                                                                </div>
                                                                                <div
                                                                                    className="imp-image-backgrounds"
                                                                                    id="imp-image-backgrounds-7947"
                                                                                ></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <input
                                                    type="hidden"
                                                    name="data-seat"
                                                    id="mb-seat"
                                                />
                                                <input
                                                    type="hidden"
                                                    name="data-seat-booked"
                                                    id="seat-booked"
                                                />
                                            </div>
                                            <ul className="mb-seat-instruction">
                                                <li className="available">
                                                    <span className="box"></span>
                                                    <span className="text"> Available</span>
                                                </li>
                                                <li className="booked">
                                                    <span className="box"></span>
                                                    <span className="text"> Booked</span>
                                                </li>
                                            </ul>
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
                                                                display: isBooking ? '' : 'none',
                                                            }}
                                                        >
                                                            <div
                                                                className="item-info item-info-map"
                                                                data-qty="0"
                                                                data-price="0"
                                                            >
                                                                <div className="info-type-ticket">
                                                                    <div className="wp-seat-info">
                                                                        {bookingList.map((seat) => (
                                                                            <span
                                                                                key={seat.id}
                                                                                className="seat-0"
                                                                            >
                                                                                {seat.id}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                                <div className="info-sub-price">
                                                                    $
                                                                    {bookingList.reduce(
                                                                        (total, seat) =>
                                                                            total + seat.price,
                                                                        0,
                                                                    )}
                                                                    .00
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="cart-fee total-discount"
                                                            style={{ display: 'none' }}
                                                        >
                                                            <p className="text">Discount</p>
                                                            <p
                                                                className="discount-number"
                                                                data-discount="0"
                                                                data-discount-code=""
                                                            ></p>
                                                        </div>

                                                        <div
                                                            className="cart-fee total-tax"
                                                            style={{ display: 'none' }}
                                                        >
                                                            <p className="text">Tax</p>
                                                            <p className="tax-number" data-tax="0">
                                                                +$0.00
                                                            </p>
                                                        </div>
                                                        <div
                                                            className="cart-fee ticket-fee"
                                                            style={{ display: 'none' }}
                                                        >
                                                            <p className="text">Ticket Fee</p>
                                                            <p
                                                                className="ticket-fee-number"
                                                                data-ticket-fee="0"
                                                            >
                                                                +$0.00
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="total-cart-info" data-total="0">
                                                    <span className="text">Total</span>
                                                    <span className="total-price">
                                                        $
                                                        {bookingList.reduce(
                                                            (total, seat) => total + seat.price,
                                                            0,
                                                        )}
                                                        .00
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="cart-discount">
                                                <a
                                                    className="cart-discount-btn"
                                                    href="javascript:void(0)"
                                                >
                                                    Enter Discount Code
                                                </a>
                                                <div
                                                    className="form-discount"
                                                    style={{ display: 'none' }}
                                                >
                                                    <div className="input-discount-code">
                                                        <input
                                                            type="text"
                                                            className="discount-code"
                                                            placeholder="DISCOUNT CODE"
                                                        />
                                                        <i
                                                            className="dashicons-before dashicons-update-alt"
                                                            style={{ display: 'none' }}
                                                        ></i>
                                                    </div>
                                                    <button
                                                        data-movie-id="842"
                                                        className="cart-discount-submit-code"
                                                    >
                                                        Apply{' '}
                                                    </button>
                                                    <i
                                                        className="fas fa-times"
                                                        id="cart-discount-close"
                                                    ></i>
                                                    <p
                                                        className="error"
                                                        style={{ display: 'block' }}
                                                    >
                                                        Invalid Discount Code
                                                    </p>
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
                                                    value="https://demo.ovatheme.com/aovis/ "
                                                />
                                                <a id="btn-checkout" href="javascript:void(0)">
                                                    Proceed to checkout{' '}
                                                </a>
                                            </div>
                                            <span className="cart-error">Please select seat</span>
                                            <div className="message-error">
                                                <a
                                                    className="mb-auto-reload"
                                                    onClick="window.location.reload(true);"
                                                    href="javascript:void(0)"
                                                ></a>
                                            </div>{' '}
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CartMovies;
