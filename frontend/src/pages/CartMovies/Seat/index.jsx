import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';
import 'tippy.js/dist/tippy.css';

function Seat({
    seatId,
    objectId,
    type,
    price,
    isBooked = false,
    isBooking = false,
    updateBookingList,
}) {
    const handleSeatClick = (seat) => {
        updateBookingList(seat);
    };

    return (
        <Tippy
            content={
                <>
                    <p>{type}</p>
                    <p>{seatId}</p>
                    <p>{price}$</p>
                </>
            }
        >
            <div
                className={`imp-object-oval imp-object ${isBooked ? 'booked' : ''} ${
                    isBooking ? 'selected' : ''
                } `}
                data-object-id={`oval-${objectId}`}
                data-title={seatId}
                data-image-map-id="7947"
                onClick={() => handleSeatClick({ id: seatId, price: price })}
            ></div>
        </Tippy>
    );
}

export default Seat;

Seat.propTypes = {
    seatId: PropTypes.string.isRequired,
    objectId: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isBooked: PropTypes.bool.isRequired,
    isBooking: PropTypes.bool.isRequired,
    updateBookingList: PropTypes.func.isRequired,
};
