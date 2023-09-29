import logo from '~/assets/images/logo-white.png';
import { useState, useEffect } from 'react';

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClass = `navbar navbar-expand-lg ${isSticky ? 'is-sticky' : ''} bg-transparent`;

    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
            <div className="container">
                <a className="navbar-brand p-0 m-0" href="/" style={{ width: '14%' }}>
                    <img src={logo} alt="site icon" style={{ width: '108px' }} />
                </a>
                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navMenu"
                    style={{ width: '71.664%' }}
                >
                    <ul className="navbar-nav">
                        <li className="nav-item position-relative dropdown">
                            <a
                                className="nav-link text-white text-capitalize active has-submenu"
                                href="/"
                                aria-current="page"
                                role="button"
                                aria-expanded="false"
                                data-bs-toggle="dropdown"
                            >
                                home
                            </a>
                            <ul className="dropdown-menu m-0">
                                <li>
                                    <a className="dropdown-item active" href="home1">
                                        Home 1
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="home2">
                                        Home 2
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="home3">
                                        Home 3
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item position-relative position-relative">
                            <a
                                className="nav-link text-white text-capitalize has-submenu"
                                href="/movies"
                                role="button"
                                aria-expanded="false"
                                data-bs-toggle="dropdown"
                            >
                                movies
                            </a>
                            <ul className="dropdown-menu m-0">
                                <li>
                                    <a className="dropdown-item" href="">
                                        movies all
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="">
                                        movies now playing
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="">
                                        movies coming soon
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="">
                                        movies category
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="">
                                        movies featured
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="">
                                        movies filter ajax 1
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="">
                                        movies filter ajax 2
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="">
                                        movies details
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item position-relative">
                            <a
                                className="nav-link text-white text-capitalize has-submenu"
                                href="/events"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                role="button"
                            >
                                events
                            </a>
                            <ul className="dropdown-menu m-0">
                                <li>
                                    <a className="dropdown-item" href="">
                                        event grid
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="">
                                        event list
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="">
                                        event details
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item position-relative">
                            <a
                                className="nav-link text-white text-capitalize has-submenu"
                                href="/pages"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                role="button"
                            >
                                pages
                            </a>
                            <ul className="dropdown-menu m-0">
                                <li>
                                    <a className="dropdown-item" href="">
                                        about
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="">
                                        our faqs
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="">
                                        404
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="">
                                        my account
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item position-relative">
                            <a
                                className="nav-link text-white text-capitalize has-submenu"
                                href="/news"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                role="button"
                            >
                                news
                            </a>
                            <ul className="dropdown-menu m-0">
                                <li>
                                    <a className="dropdown-item" href="">
                                        news
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="">
                                        default no sidebar
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="">
                                        news grid
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="">
                                        grid no sidebar
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="">
                                        news masonry
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="">
                                        masonry no sidebar
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="">
                                        news details
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item position-relative">
                            <a className="nav-link text-white text-capitalize" href="/contact">
                                contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div
                    className="nav-btns d-flex align-items-center justify-content-end"
                    style={{ width: '14%' }}
                >
                    <div
                        className="position-relative d-inline-flex"
                        type="button"
                        style={{ paddingRight: '25px' }}
                    >
                        <i
                            className="icon ovaicon-search text-white"
                            style={{ transform: 'rotate(-90deg)' }}
                        ></i>
                    </div>
                    <div className="position-relative d-inline-flex" type="button">
                        <i className="icon ovaicon-user-1 text-white"></i>
                    </div>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
