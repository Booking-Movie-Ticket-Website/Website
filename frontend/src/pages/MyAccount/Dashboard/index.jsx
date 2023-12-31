import Main from './Main';
import Booking from './Bookings';
import Account from './Account';
import { useState, useEffect, useRef } from 'react';
import axios from '~/utils/axios';
import PasswordChange from './PasswordChange';

function DashBoard() {
    const [currentTab, setCurrentTab] = useState(0);
    const [userData, setUserData] = useState('');
    const tabRef = useRef([]);
    const hanldeClick = (e, index) => {
        e.preventDefault();
        Array(4)
            .fill(0)
            .map((item, index) => {
                tabRef[index].classList.remove('is-active');
            });
        switch (index) {
            case 0:
                tabRef[0].classList.add('is-active');
                setCurrentTab(0);
                break;
            case 1:
                tabRef[1].classList.add('is-active');
                setCurrentTab(1);
                break;
            case 2:
                tabRef[2].classList.add('is-active');
                setCurrentTab(2);
                break;
            case 3:
                tabRef[3].classList.add('is-active');
                setCurrentTab(3);
                break;
            case 4:
                tabRef[3].classList.add('is-active');
                localStorage.removeItem('accessToken');
                location.reload();
                break;
        }
    };
    useEffect(() => {
        (async () => {
            const accessToken = localStorage.getItem('accessToken');
            await axios
                .get(`/users/my-info`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                .then((response) => {
                    setUserData(response);
                })
                .catch((error) => console.error(error));
        })();
    }, []);
    return (
        <article id="post-12" className="post-wrap  post-12 page type-page status-publish hentry">
            <div className="woocommerce">
                <nav className="woocommerce-MyAccount-navigation">
                    <ul>
                        <li
                            className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--dashboard is-active"
                            ref={(e) => (tabRef[0] = e)}
                        >
                            <a onClick={(e) => hanldeClick(e, 0)}>Dashboard</a>
                        </li>
                        <li
                            className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders"
                            ref={(e) => (tabRef[1] = e)}
                        >
                            <a onClick={(e) => hanldeClick(e, 1)}>Orders</a>
                        </li>
                        <li
                            className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-account"
                            ref={(e) => (tabRef[2] = e)}
                        >
                            <a onClick={(e) => hanldeClick(e, 2)}>Account details</a>
                        </li>
                        <li
                            className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-account"
                            ref={(e) => (tabRef[3] = e)}
                        >
                            <a onClick={(e) => hanldeClick(e, 3)}>Change Password</a>
                        </li>
                        <li
                            className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout"
                            ref={(e) => (tabRef[4] = e)}
                        >
                            <a onClick={(e) => hanldeClick(e, 4)}>Log out</a>
                        </li>
                    </ul>
                </nav>
                {currentTab == 0 ? (
                    <Main userData={userData} />
                ) : currentTab == 1 ? (
                    <Booking />
                ) : currentTab == 2 ? (
                    <Account userData={userData} />
                ) : (
                    <PasswordChange />
                )}
            </div>
        </article>
    );
}
export default DashBoard;
