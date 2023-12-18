import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '~/redux-toolkit/BookingTicket/BookingTicketSlice';
import axios from '~/utils/axios';

function BookingTicket() {
    const [theater, setTheater] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showingDate, setShowingDate] = useState(() => {
        const currentDate = new Date();
        const currentMonth =
            currentDate.getMonth() + 1 >= 10
                ? currentDate.getMonth() + 1
                : '0' + (currentDate.getMonth() + 1);
        const currentDay =
            currentDate.getDate() >= 10 ? currentDate.getDate() : '0' + currentDate.getDate();
        return currentDate.getFullYear() + '-' + currentMonth + '-' + currentDay;
    });
    const dateRefs = useRef([]);

    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.bookingticket.isOpen);
    const movieId = useSelector((state) => state.bookingticket.movieId);
    const currentDate = new Date();
    const dates = [];
    for (let i = 0; i < 14; i++) {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + i);
        dates.push(newDate);
    }
    const handleDateConfig = (date) => {
        const currentDate = new Date(date);
        const currentMonth =
            currentDate.getMonth() + 1 >= 10
                ? currentDate.getMonth() + 1
                : '0' + (currentDate.getMonth() + 1);
        const currentDay =
            currentDate.getDate() >= 10 ? currentDate.getDate() : '0' + currentDate.getDate();
        return currentDate.getFullYear() + '-' + currentMonth + '-' + currentDay;
    };
    const handleClickOutside = (e) => {
        if (e.target.id === 'mb_booking_popup') {
            dispatch(closeModal());
        }
    };
    const handleChangeDate = (index) => {
        for (let i = 0; i < 14; i++) {
            dateRefs[i].classList.remove('current');
        }
        dateRefs[index].classList.add('current');
        setShowingDate(handleDateConfig(dateRefs[index].dataset.id));
    };
    useEffect(() => {
        (async () => {
            setIsLoading(true);
            await axios
                .get(`theaters?page=1&take=10&movieId=${movieId}&showingDate=${showingDate}`, {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((response) => {
                    setTheater(response.data);
                    setIsLoading(false);
                })
                .catch((error) => console.error(error));
        })();
    }, [showingDate, movieId]);
    return (
        isModalOpen && (
            <div
                id="mb_booking_popup"
                className="mb_booking_popup"
                style={{ display: isModalOpen ? 'block' : 'none' }}
                onClick={handleClickOutside}
            >
                <div className="mb-bp-container">
                    <div
                        className="mb-bp-content"
                        style={{ display: isModalOpen ? 'block' : 'none' }}
                    >
                        <ul className="toggle-tabs mb-date-tabs">
                            {dates.map((item, index) => {
                                return (
                                    <li
                                        className={index == 0 && 'current'}
                                        key={index}
                                        data-id={item}
                                        ref={(e) => (dateRefs[index] = e)}
                                        onClick={() => handleChangeDate(index)}
                                    >
                                        <div className="day">
                                            <span className="D_m_day">
                                                <span className="m_day">
                                                    {item.toDateString().slice(4, 7)}
                                                </span>
                                                <span className="D_day">
                                                    {item.toDateString().slice(0, 3)}
                                                </span>
                                            </span>
                                            <span className="d_day">
                                                <strong>{item.toDateString().slice(8, 10)}</strong>
                                            </span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        {!isLoading ? (
                            <div>
                                {theater.length > 0 ? (
                                    <dl className="collateral-tabs">
                                        <dd className="tab-container current">
                                            <div className="tab-content mb-showtimes">
                                                <div className="mb-tabs-cities">
                                                    <ul className="toggle-tabs">
                                                        {theater.map((item, index) => {
                                                            return (
                                                                <li
                                                                    className={
                                                                        index == 0
                                                                            ? 'mb-city-name current'
                                                                            : 'mb-city-name'
                                                                    }
                                                                    key={index}
                                                                >
                                                                    <span>{item.city}</span>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>

                                                <dl className="collateral-tabs">
                                                    {theater.map((item, index) => {
                                                        return (
                                                            <div key={index}>
                                                                <dt
                                                                    className={
                                                                        index == 0
                                                                            ? 'tab current'
                                                                            : 'tab'
                                                                    }
                                                                >
                                                                    {item.city}
                                                                </dt>
                                                                <dd
                                                                    className={
                                                                        index == 0
                                                                            ? 'tab-container current'
                                                                            : 'tab-container'
                                                                    }
                                                                >
                                                                    <div className="tab-content mb-room-types">
                                                                        <dl className="collateral-tabs">
                                                                            <dt className="tab current">
                                                                                3D
                                                                            </dt>
                                                                            <dd className="tab-container current">
                                                                                <div className="tab-content showtimes">
                                                                                    {item.rooms.map(
                                                                                        (
                                                                                            room,
                                                                                            index,
                                                                                        ) => {
                                                                                            return (
                                                                                                <div
                                                                                                    className="mb-venue"
                                                                                                    key={
                                                                                                        index
                                                                                                    }
                                                                                                >
                                                                                                    <div className="venue-name">
                                                                                                        <h3>
                                                                                                            {
                                                                                                                room.name
                                                                                                            }
                                                                                                        </h3>
                                                                                                    </div>
                                                                                                    <div className="mb-room-name">
                                                                                                        <h4>
                                                                                                            {room.type.toUpperCase()}
                                                                                                        </h4>
                                                                                                    </div>
                                                                                                    <ul className="mb-tab-showtime">
                                                                                                        {room.showings.map(
                                                                                                            (
                                                                                                                showing,
                                                                                                                index,
                                                                                                            ) => {
                                                                                                                let showingTime =
                                                                                                                    new Date(
                                                                                                                        showing.startTime,
                                                                                                                    );
                                                                                                                let utcHours =
                                                                                                                    showingTime.getUTCHours() >=
                                                                                                                    10
                                                                                                                        ? showingTime.getUTCHours()
                                                                                                                        : '0' +
                                                                                                                          showingTime.getUTCHours();
                                                                                                                let utcMinutes =
                                                                                                                    showingTime.getUTCMinutes() >=
                                                                                                                    10
                                                                                                                        ? showingTime.getUTCMinutes()
                                                                                                                        : '0' +
                                                                                                                          showingTime.getUTCMinutes();
                                                                                                                let showTime =
                                                                                                                    utcHours +
                                                                                                                    ':' +
                                                                                                                    utcMinutes;
                                                                                                                showTime +=
                                                                                                                    showingTime.getUTCHours() <=
                                                                                                                    11
                                                                                                                        ? ' AM'
                                                                                                                        : ' PM';
                                                                                                                return (
                                                                                                                    <li
                                                                                                                        className="item"
                                                                                                                        key={
                                                                                                                            index
                                                                                                                        }
                                                                                                                    >
                                                                                                                        <a href="">
                                                                                                                            <span>
                                                                                                                                {
                                                                                                                                    showTime
                                                                                                                                }
                                                                                                                            </span>
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                );
                                                                                                            },
                                                                                                        )}
                                                                                                    </ul>
                                                                                                </div>
                                                                                            );
                                                                                        },
                                                                                    )}
                                                                                </div>
                                                                            </dd>
                                                                        </dl>
                                                                    </div>
                                                                </dd>
                                                            </div>
                                                        );
                                                    })}
                                                </dl>
                                            </div>
                                        </dd>
                                    </dl>
                                ) : (
                                    <div
                                        style={{
                                            fontSize: '20px',
                                            fontWeight: 600,
                                            color: '#636363',
                                            marginTop: '1vw',
                                            marginLeft: '1vw',
                                        }}
                                    >
                                        There is no screening of this movie today
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="mb-spinner" style={{ display: 'block' }}>
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
                        )}
                    </div>
                    <div
                        className="mb-close"
                        style={{ display: 'flex' }}
                        onClick={() => dispatch(closeModal())}
                    >
                        x
                    </div>
                </div>
            </div>
        )
    );
}
export default BookingTicket;
