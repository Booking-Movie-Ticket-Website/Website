import { useEffect, useRef, useState } from 'react';
import logo from '~/assets/images/logo.png';
import SearchUser from './SearchUser';
import axios from '~/utils/axios';

function Header() {
    const [cateData, setCateData] = useState('');
    const headerRef = useRef();
    const headerMobiRef = useRef();
    useEffect(() => {
        (async () => {
            await axios
                .get('/categories/no-pagination', {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((response) => {
                    setCateData(response);
                })
                .catch((error) => console.error(error));
        })();
    }, []);
    useEffect(() => {
        window.onscroll = function () {
            const header = document.querySelector('.header_sticky');
            const height = header.offsetHeight;
            if (document.documentElement.scrollTop > height) {
                header.classList.add('active_sticky', 'sticky_bg_dark');
            } else {
                header.classList.remove('active_sticky', 'sticky_bg_dark');
            }
        };
    }, []);
    useEffect(() => {
        //desktop menu
        const items = headerRef.current.querySelectorAll('li');
        items.forEach((item) => {
            item.classList.remove('current-menu-item');
        });
        items.forEach((item) => {
            let itemText = item.textContent;
            let routeName = window.location.pathname;
            if (routeName.length < 3 && itemText == 'Home') item.classList.add('current-menu-item');
            else if (routeName.includes(itemText.toLowerCase()))
                item.classList.add('current-menu-item');
            else if (
                itemText == 'Movies' &&
                (!!routeName.includes('movie') || !!routeName.includes('categories'))
            )
                item.classList.add('current-menu-item');
        });
        //responsive menu
        const mobiItems = headerMobiRef.current.querySelectorAll('li');
        mobiItems.forEach((item) => {
            item.classList.remove('current-menu-item');
        });
        mobiItems.forEach((item) => {
            let itemText = item.textContent;
            let routeName = window.location.pathname;
            if (routeName.length < 3 && itemText == 'Home') item.classList.add('current-menu-item');
            else if (routeName.includes(itemText.toLowerCase()))
                item.classList.add('current-menu-item');
            else if (
                itemText == 'Movies' &&
                (!!routeName.includes('movie') || !!routeName.includes('categories'))
            )
                item.classList.add('current-menu-item');
        });
    }, []);
    // function toggleSubMenu(button) {
    //     const subMenu = button.parentElement.querySelector('.sub-menu');
    //     if (subMenu) {
    //         subMenu.classList.toggle('show');
    //     }
    // }

    return (
        <header id="header" className="elementor elementor-34">
            <section className="elementor-section elementor-top-section elementor-element elementor-element-453658a elementor-section-full_width elementor-section-content-middle header_sticky mobile_sticky sticky_bg_dark elementor-section-height-default">
                <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-2aa6835">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-f2fecd8 elementor-widget elementor-widget-ova_logo">
                                <div className="elementor-widget-container">
                                    <div className="brand_el">
                                        <a href="/">
                                            <img
                                                src={logo}
                                                alt="Aovis – Film &amp; Movie Booking"
                                                className="logo_desktop"
                                                style={{ width: '180px', height: 'auto' }}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-2a25ff3"
                        data-id="2a25ff3"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-9fa20ed elementor-view-primary-menu elementor-widget__width-auto elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-aovis_elementor_menu_nav"
                                data-id="9fa20ed"
                                data-element_type="widget"
                                data-widget_type="aovis_elementor_menu_nav.default"
                            >
                                <div className="elementor-widget-container">
                                    <nav className="main-navigation">
                                        <button className="menu-toggle">
                                            <span>Menu</span>
                                        </button>
                                        <div className="primary-navigation">
                                            <ul
                                                id="menu-primary-menu"
                                                className="menu"
                                                ref={headerRef}
                                            >
                                                <li
                                                    id="menu-item-56"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-24 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-56"
                                                >
                                                    <a href="/" aria-current="page">
                                                        Home
                                                    </a>
                                                </li>
                                                <li
                                                    id="menu-item-2310"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2310  menu-item-has-children"
                                                >
                                                    <a href="/movies-all">Movies</a>
                                                    <button className="dropdown-toggle"></button>
                                                    <ul className="sub-menu">
                                                        <li
                                                            id="menu-item-4151"
                                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4151"
                                                        >
                                                            <a href="/movies-all">All Movies</a>
                                                        </li>
                                                        {cateData &&
                                                            cateData.map((item) => {
                                                                return (
                                                                    <li
                                                                        id="menu-item-4617"
                                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4617"
                                                                        key={item.id}
                                                                    >
                                                                        <a
                                                                            href={`/categories/${item.id}`}
                                                                        >
                                                                            {item.name}
                                                                        </a>
                                                                    </li>
                                                                );
                                                            })}
                                                    </ul>
                                                </li>
                                                <li
                                                    id="menu-item-57"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57"
                                                >
                                                    <a href="/news">News</a>
                                                </li>
                                                <li
                                                    id="menu-item-62"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62"
                                                >
                                                    <a href="/contact/">Contact</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-a4c2dd9 elementor-widget__width-auto elementor-hidden-desktop elementor-view-primary-menu elementor-widget elementor-widget-aovis_elementor_menu_canvas"
                                data-id="a4c2dd9"
                                data-element_type="widget"
                                data-widget_type="aovis_elementor_menu_canvas.default"
                            >
                                <div className="elementor-widget-container">
                                    <nav className="menu-canvas">
                                        <button
                                            className="menu-toggle"
                                            onClick={(e) => {
                                                e.target.parentElement.classList.toggle('toggled');
                                            }}
                                        >
                                            <span></span>
                                        </button>
                                        <nav className="container-menu dir_left">
                                            <div className="primary-navigation">
                                                <ul
                                                    id="menu-primary-menu-1"
                                                    className="menu"
                                                    ref={headerMobiRef}
                                                >
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62">
                                                        <a href="/">Home</a>
                                                    </li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2310">
                                                        <a href="/movies-all/">Movies</a>
                                                        {/* <button
                                                            className="dropdown-toggle"
                                                            onClick={(e) => toggleSubMenu(e.target)}
                                                        ></button>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4151">
                                                                <a href="#">Movie All</a>
                                                                <button
                                                                    className="dropdown-toggle"
                                                                    onClick={(e) =>
                                                                        toggleSubMenu(e.target)
                                                                    }
                                                                ></button>
                                                                <ul className="sub-menu">
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4155">
                                                                        <a href="/movies-all/">
                                                                            Template 1
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4161">
                                                                        <a href="/movies-all-template-2/">
                                                                            Template 2
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4173">
                                                                        <a href="/movies-all-template-3/">
                                                                            Template 3
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4172">
                                                                        <a href="/movies-all-template-4/">
                                                                            Template 4
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4188">
                                                                <a href="#">Movies Now Playing</a>
                                                                <button
                                                                    className="dropdown-toggle"
                                                                    onClick={(e) =>
                                                                        toggleSubMenu(e.target)
                                                                    }
                                                                ></button>
                                                                <ul className="sub-menu">
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4189">
                                                                        <a href="/movies-now-playing-template-1/">
                                                                            Template 1
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4191">
                                                                        <a href="/movies-now-playing-template-2/">
                                                                            Template 2
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4207">
                                                                        <a href="/movies-now-playing-template-3/">
                                                                            Template 3
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4206">
                                                                        <a href="/movies-now-playing-template-4/">
                                                                            Template 4
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4214">
                                                                <a href="#">Movie Coming Soon</a>
                                                                <button
                                                                    className="dropdown-toggle"
                                                                    onClick={(e) =>
                                                                        toggleSubMenu(e.target)
                                                                    }
                                                                ></button>
                                                                <ul className="sub-menu">
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4213">
                                                                        <a href="/movies-coming-soon-template-1/">
                                                                            Template 1
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4229">
                                                                        <a href="/movies-coming-soon-template-2/">
                                                                            Template 2
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4228">
                                                                        <a href="/movies-coming-soon-template-3/">
                                                                            Template 3
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4227">
                                                                        <a href="/movies-coming-soon-template-4/">
                                                                            Template 4
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4591">
                                                                <a href="#">Movie Category</a>
                                                                <button
                                                                    className="dropdown-toggle"
                                                                    onClick={(e) =>
                                                                        toggleSubMenu(e.target)
                                                                    }
                                                                ></button>
                                                                <ul className="sub-menu">
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4617">
                                                                        <a href="/thriller-category-template-1/">
                                                                            Thriller – Template 1
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4611">
                                                                        <a href="/thriller-category-template-2/">
                                                                            Thriller – Template 2
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4610">
                                                                        <a href="/thriller-category-template-3/">
                                                                            Thriller – Template 3
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4609">
                                                                        <a href="/thriller-category-template-4/">
                                                                            Thriller – Template 4
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4623">
                                                                        <a href="/adventure-category-template-1/">
                                                                            Adventure – Template 1
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4629">
                                                                <a href="/movies-featured/">
                                                                    Movies Featured
                                                                </a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4252">
                                                                <a href="#">Movie Filter Ajax 1</a>
                                                                <button
                                                                    className="dropdown-toggle"
                                                                    onClick={(e) =>
                                                                        toggleSubMenu(e.target)
                                                                    }
                                                                ></button>
                                                                <ul className="sub-menu">
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3652">
                                                                        <a href="/movie-filter-ajax-template-1/">
                                                                            Template 1
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4251">
                                                                        <a href="/movie-filter-ajax-template-2/">
                                                                            Template 2
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4250">
                                                                        <a href="/movie-filter-ajax-template-3/">
                                                                            Template 3
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4249">
                                                                        <a href="/movie-filter-ajax-template-4/">
                                                                            Template 4
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4275">
                                                                <a href="#">Movie Filter Ajax 2</a>
                                                                <button
                                                                    className="dropdown-toggle"
                                                                    onClick={(e) =>
                                                                        toggleSubMenu(e.target)
                                                                    }
                                                                ></button>
                                                                <ul className="sub-menu">
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3661">
                                                                        <a href="/movie-filter-ajax-2-template-1/">
                                                                            Template 1
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4274">
                                                                        <a href="/movie-filter-ajax-2-template-2/">
                                                                            Template 2
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4273">
                                                                        <a href="/movie-filter-ajax-2-template-3/">
                                                                            Template 3
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4272">
                                                                        <a href="/movie-filter-ajax-2-template-4/">
                                                                            Template 4
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-movie menu-item-3303">
                                                                <a href="/movie/wrong-turns-part-2/">
                                                                    Movie Details
                                                                </a>
                                                            </li>
                                                        </ul> */}
                                                    </li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-57">
                                                        <a href="/news/">News</a>
                                                    </li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62">
                                                        <a href="/contact/">Contact</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                        <div
                                            className="site-overlay"
                                            onClick={(e) =>
                                                e.target.parentElement.classList.remove('toggled')
                                            }
                                        ></div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SearchUser />
                </div>
            </section>
        </header>
    );
}

export default Header;
