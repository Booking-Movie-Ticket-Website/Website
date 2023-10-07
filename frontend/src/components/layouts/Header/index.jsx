import { useEffect, useState } from 'react';

function Header() {
    const [query, setQuery] = useState('');

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

    function toggleSubMenu(button) {
        const subMenu = button.parentElement.querySelector('.sub-menu');
        if (subMenu) {
            subMenu.classList.toggle('show');
        }
    }

    return (
        <header id="header" className="elementor elementor-34">
            <section className="elementor-section elementor-top-section elementor-element elementor-element-453658a elementor-section-full_width elementor-section-content-middle header_sticky mobile_sticky sticky_bg_dark elementor-section-height-default">
                <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-2aa6835">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-f2fecd8 elementor-widget elementor-widget-ova_logo">
                                <div className="elementor-widget-container">
                                    <div className="brand_el">
                                        <a href="/ ">
                                            <img
                                                src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/logo-white.png"
                                                alt="Aovis – Film &amp; Movie Booking"
                                                className="logo_desktop"
                                                style={{ width: '108px', height: 'auto' }}
                                            />

                                            <img
                                                src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/logo-white.png"
                                                alt="Aovis – Film &amp; Movie Booking"
                                                className="logo_mobile"
                                                style={{ width: '108px', height: 'auto' }}
                                            />

                                            <img
                                                src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/logo-white.png"
                                                alt="Aovis – Film &amp; Movie Booking"
                                                className="logo_sticky"
                                                style={{ width: '108px', height: 'auto' }}
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
                                            <span>Menu </span>
                                        </button>
                                        <div className="primary-navigation">
                                            <ul id="menu-primary-menu" className="menu">
                                                <li
                                                    id="menu-item-56"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-24 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-56"
                                                >
                                                    <a
                                                        href="https://demo.ovatheme.com/aovis/"
                                                        aria-current="page"
                                                    >
                                                        Home
                                                    </a>
                                                    <button className="dropdown-toggle"></button>
                                                    <ul className="sub-menu">
                                                        <li
                                                            id="menu-item-2298"
                                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-24 current_page_item menu-item-2298"
                                                        >
                                                            <a
                                                                href="https://demo.ovatheme.com/aovis/"
                                                                aria-current="page"
                                                            >
                                                                Home 1
                                                            </a>
                                                        </li>
                                                        <li
                                                            id="menu-item-63"
                                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63"
                                                        >
                                                            <a href="https://demo.ovatheme.com/aovis/home-2/">
                                                                Home 2
                                                            </a>
                                                        </li>
                                                        <li
                                                            id="menu-item-64"
                                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64"
                                                        >
                                                            <a href="https://demo.ovatheme.com/aovis/home-3/">
                                                                Home 3
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li
                                                    id="menu-item-2310"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2310"
                                                >
                                                    <a href="https://demo.ovatheme.com/aovis/movies-all/">
                                                        Movies
                                                    </a>
                                                    <button className="dropdown-toggle"></button>
                                                    <ul className="sub-menu">
                                                        <li
                                                            id="menu-item-4151"
                                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4151"
                                                        >
                                                            <a href="#">Movie All</a>
                                                            <button className="dropdown-toggle"></button>
                                                            <ul className="sub-menu">
                                                                <li
                                                                    id="menu-item-4155"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4155"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movies-all/">
                                                                        Template 1
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4161"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4161"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movies-all-template-2/">
                                                                        Template 2
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4173"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4173"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movies-all-template-3/">
                                                                        Template 3
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4172"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4172"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movies-all-template-4/">
                                                                        Template 4
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li
                                                            id="menu-item-4188"
                                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4188"
                                                        >
                                                            <a href="#">Movies Now Playing</a>
                                                            <button className="dropdown-toggle"></button>
                                                            <ul className="sub-menu">
                                                                <li
                                                                    id="menu-item-4189"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4189"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movies-now-playing-template-1/">
                                                                        Template 1
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4191"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4191"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movies-now-playing-template-2/">
                                                                        Template 2
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4207"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4207"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movies-now-playing-template-3/">
                                                                        Template 3
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4206"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4206"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movies-now-playing-template-4/">
                                                                        Template 4
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li
                                                            id="menu-item-4214"
                                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4214"
                                                        >
                                                            <a href="#">Movie Coming Soon</a>
                                                            <button className="dropdown-toggle"></button>
                                                            <ul className="sub-menu">
                                                                <li
                                                                    id="menu-item-4213"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4213"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movies-coming-soon-template-1/">
                                                                        Template 1
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4229"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4229"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movies-coming-soon-template-2/">
                                                                        Template 2
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4228"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4228"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movies-coming-soon-template-3/">
                                                                        Template 3
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4227"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4227"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movies-coming-soon-template-4/">
                                                                        Template 4
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li
                                                            id="menu-item-4591"
                                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4591"
                                                        >
                                                            <a href="#">Movie Category</a>
                                                            <button className="dropdown-toggle"></button>
                                                            <ul className="sub-menu">
                                                                <li
                                                                    id="menu-item-4617"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4617"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/thriller-category-template-1/">
                                                                        Thriller – Template 1
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4611"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4611"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/thriller-category-template-2/">
                                                                        Thriller – Template 2
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4610"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4610"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/thriller-category-template-3/">
                                                                        Thriller – Template 3
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4609"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4609"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/thriller-category-template-4/">
                                                                        Thriller – Template 4
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4623"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4623"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/adventure-category-template-1/">
                                                                        Adventure – Template 1
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li
                                                            id="menu-item-4629"
                                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4629"
                                                        >
                                                            <a href="https://demo.ovatheme.com/aovis/movies-featured/">
                                                                Movies Featured
                                                            </a>
                                                        </li>
                                                        <li
                                                            id="menu-item-4252"
                                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4252"
                                                        >
                                                            <a href="#">Movie Filter Ajax 1</a>
                                                            <button className="dropdown-toggle"></button>
                                                            <ul className="sub-menu">
                                                                <li
                                                                    id="menu-item-3652"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3652"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movie-filter-ajax-template-1/">
                                                                        Template 1
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4251"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4251"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movie-filter-ajax-template-2/">
                                                                        Template 2
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4250"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4250"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movie-filter-ajax-template-3/">
                                                                        Template 3
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4249"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4249"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movie-filter-ajax-template-4/">
                                                                        Template 4
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li
                                                            id="menu-item-4275"
                                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4275"
                                                        >
                                                            <a href="#">Movie Filter Ajax 2</a>
                                                            <button className="dropdown-toggle"></button>
                                                            <ul className="sub-menu">
                                                                <li
                                                                    id="menu-item-3661"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3661"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movie-filter-ajax-2-template-1/">
                                                                        Template 1
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4274"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4274"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movie-filter-ajax-2-template-2/">
                                                                        Template 2
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4273"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4273"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movie-filter-ajax-2-template-3/">
                                                                        Template 3
                                                                    </a>
                                                                </li>
                                                                <li
                                                                    id="menu-item-4272"
                                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4272"
                                                                >
                                                                    <a href="https://demo.ovatheme.com/aovis/movie-filter-ajax-2-template-4/">
                                                                        Template 4
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li
                                                            id="menu-item-3303"
                                                            className="menu-item menu-item-type-post_type menu-item-object-movie menu-item-3303"
                                                        >
                                                            <a href="https://demo.ovatheme.com/aovis/movie/wrong-turns-part-2/">
                                                                Movie Details
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li
                                                    id="menu-item-57"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-57"
                                                >
                                                    <a href="https://demo.ovatheme.com/aovis/news/">
                                                        News
                                                    </a>
                                                    <button className="dropdown-toggle"></button>
                                                    <ul className="sub-menu">
                                                        <li
                                                            id="menu-item-2312"
                                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2312"
                                                        >
                                                            <a href="https://demo.ovatheme.com/aovis/news/">
                                                                News
                                                            </a>
                                                        </li>
                                                        <li
                                                            id="menu-item-3438"
                                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3438"
                                                        >
                                                            <a href="https://demo.ovatheme.com/aovis/blog/?layout_sidebar=layout_1c">
                                                                Default No Sidebar
                                                            </a>
                                                        </li>
                                                        <li
                                                            id="menu-item-2306"
                                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2306"
                                                        >
                                                            <a href="https://demo.ovatheme.com/aovis/blog/?blog_template=grid">
                                                                News Grid
                                                            </a>
                                                        </li>
                                                        <li
                                                            id="menu-item-2307"
                                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2307"
                                                        >
                                                            <a href="https://demo.ovatheme.com/aovis/blog/?blog_template=grid&amp;layout_sidebar=layout_1c">
                                                                Grid No Sidebar
                                                            </a>
                                                        </li>
                                                        <li
                                                            id="menu-item-2308"
                                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2308"
                                                        >
                                                            <a href="https://demo.ovatheme.com/aovis/blog/?blog_template=masonry">
                                                                News Masonry
                                                            </a>
                                                        </li>
                                                        <li
                                                            id="menu-item-2309"
                                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2309"
                                                        >
                                                            <a href="https://demo.ovatheme.com/aovis/blog/?blog_template=masonry&amp;&amp;layout_sidebar=layout_1c">
                                                                Marsonry No Sidebar
                                                            </a>
                                                        </li>
                                                        <li
                                                            id="menu-item-3437"
                                                            className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3437"
                                                        >
                                                            <a href="https://demo.ovatheme.com/aovis/8-films-are-vying-for-the-foreign-oscar-nominations/">
                                                                News Details
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li
                                                    id="menu-item-62"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62"
                                                >
                                                    <a href="https://demo.ovatheme.com/aovis/contact/">
                                                        Contact
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>{' '}
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
                                                <ul id="menu-primary-menu-1" className="menu">
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-24 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-56">
                                                        <a
                                                            href="https://demo.ovatheme.com/aovis/"
                                                            aria-current="page"
                                                        >
                                                            Home
                                                        </a>
                                                        <button
                                                            className="dropdown-toggle"
                                                            onClick={(e) => toggleSubMenu(e.target)}
                                                        ></button>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-24 current_page_item menu-item-2298">
                                                                <a
                                                                    href="https://demo.ovatheme.com/aovis/"
                                                                    aria-current="page"
                                                                >
                                                                    Home 1
                                                                </a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63">
                                                                <a href="https://demo.ovatheme.com/aovis/home-2/">
                                                                    Home 2
                                                                </a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64">
                                                                <a href="https://demo.ovatheme.com/aovis/home-3/">
                                                                    Home 3
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2310">
                                                        <a href="https://demo.ovatheme.com/aovis/movies-all/">
                                                            Movies
                                                        </a>
                                                        <button
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
                                                                        <a href="https://demo.ovatheme.com/aovis/movies-all/">
                                                                            Template 1
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4161">
                                                                        <a href="https://demo.ovatheme.com/aovis/movies-all-template-2/">
                                                                            Template 2
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4173">
                                                                        <a href="https://demo.ovatheme.com/aovis/movies-all-template-3/">
                                                                            Template 3
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4172">
                                                                        <a href="https://demo.ovatheme.com/aovis/movies-all-template-4/">
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
                                                                        <a href="https://demo.ovatheme.com/aovis/movies-now-playing-template-1/">
                                                                            Template 1
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4191">
                                                                        <a href="https://demo.ovatheme.com/aovis/movies-now-playing-template-2/">
                                                                            Template 2
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4207">
                                                                        <a href="https://demo.ovatheme.com/aovis/movies-now-playing-template-3/">
                                                                            Template 3
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4206">
                                                                        <a href="https://demo.ovatheme.com/aovis/movies-now-playing-template-4/">
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
                                                                        <a href="https://demo.ovatheme.com/aovis/movies-coming-soon-template-1/">
                                                                            Template 1
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4229">
                                                                        <a href="https://demo.ovatheme.com/aovis/movies-coming-soon-template-2/">
                                                                            Template 2
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4228">
                                                                        <a href="https://demo.ovatheme.com/aovis/movies-coming-soon-template-3/">
                                                                            Template 3
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4227">
                                                                        <a href="https://demo.ovatheme.com/aovis/movies-coming-soon-template-4/">
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
                                                                        <a href="https://demo.ovatheme.com/aovis/thriller-category-template-1/">
                                                                            Thriller – Template 1
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4611">
                                                                        <a href="https://demo.ovatheme.com/aovis/thriller-category-template-2/">
                                                                            Thriller – Template 2
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4610">
                                                                        <a href="https://demo.ovatheme.com/aovis/thriller-category-template-3/">
                                                                            Thriller – Template 3
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4609">
                                                                        <a href="https://demo.ovatheme.com/aovis/thriller-category-template-4/">
                                                                            Thriller – Template 4
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4623">
                                                                        <a href="https://demo.ovatheme.com/aovis/adventure-category-template-1/">
                                                                            Adventure – Template 1
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4629">
                                                                <a href="https://demo.ovatheme.com/aovis/movies-featured/">
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
                                                                        <a href="https://demo.ovatheme.com/aovis/movie-filter-ajax-template-1/">
                                                                            Template 1
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4251">
                                                                        <a href="https://demo.ovatheme.com/aovis/movie-filter-ajax-template-2/">
                                                                            Template 2
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4250">
                                                                        <a href="https://demo.ovatheme.com/aovis/movie-filter-ajax-template-3/">
                                                                            Template 3
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4249">
                                                                        <a href="https://demo.ovatheme.com/aovis/movie-filter-ajax-template-4/">
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
                                                                        <a href="https://demo.ovatheme.com/aovis/movie-filter-ajax-2-template-1/">
                                                                            Template 1
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4274">
                                                                        <a href="https://demo.ovatheme.com/aovis/movie-filter-ajax-2-template-2/">
                                                                            Template 2
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4273">
                                                                        <a href="https://demo.ovatheme.com/aovis/movie-filter-ajax-2-template-3/">
                                                                            Template 3
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4272">
                                                                        <a href="https://demo.ovatheme.com/aovis/movie-filter-ajax-2-template-4/">
                                                                            Template 4
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-movie menu-item-3303">
                                                                <a href="https://demo.ovatheme.com/aovis/movie/wrong-turns-part-2/">
                                                                    Movie Details
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-57">
                                                        <a href="https://demo.ovatheme.com/aovis/news/">
                                                            News
                                                        </a>
                                                        <button
                                                            className="dropdown-toggle"
                                                            onClick={(e) => toggleSubMenu(e.target)}
                                                        ></button>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2312">
                                                                <a href="https://demo.ovatheme.com/aovis/news/">
                                                                    News
                                                                </a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3438">
                                                                <a href="https://demo.ovatheme.com/aovis/blog/?layout_sidebar=layout_1c">
                                                                    Default No Sidebar
                                                                </a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2306">
                                                                <a href="https://demo.ovatheme.com/aovis/blog/?blog_template=grid">
                                                                    News Grid
                                                                </a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2307">
                                                                <a href="https://demo.ovatheme.com/aovis/blog/?blog_template=grid&amp;layout_sidebar=layout_1c">
                                                                    Grid No Sidebar
                                                                </a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2308">
                                                                <a href="https://demo.ovatheme.com/aovis/blog/?blog_template=masonry">
                                                                    News Masonry
                                                                </a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2309">
                                                                <a href="https://demo.ovatheme.com/aovis/blog/?blog_template=masonry&amp;&amp;layout_sidebar=layout_1c">
                                                                    Marsonry No Sidebar
                                                                </a>
                                                            </li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3437">
                                                                <a href="https://demo.ovatheme.com/aovis/8-films-are-vying-for-the-foreign-oscar-nominations/">
                                                                    News Details
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62">
                                                        <a href="https://demo.ovatheme.com/aovis/contact/">
                                                            Contact
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>{' '}
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
                    <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-3e65c79 elementor-hidden-tablet elementor-hidden-mobile"
                        data-id="3e65c79"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-947ac0b elementor-widget__width-auto elementor-widget elementor-widget-aovis_elementor_search_popup"
                                data-id="947ac0b"
                                data-element_type="widget"
                                data-widget_type="aovis_elementor_search_popup.default"
                            >
                                <div className="elementor-widget-container">
                                    <div
                                        className="ova_wrap_search_popup"
                                        onClick={(e) => {
                                            e.target.parentElement.classList.toggle('show');
                                        }}
                                    >
                                        <i className="ovaicon ovaicon-search"></i>
                                        <div className="ova_search_popup">
                                            <div
                                                className="search-popup__overlay"
                                                onClick={(e) =>
                                                    e.target.parentElement.parentElement.classList.remove(
                                                        'show',
                                                    )
                                                }
                                            ></div>
                                            <div className="container">
                                                <form
                                                    role="search"
                                                    method="get"
                                                    className="search-form"
                                                    action="https://demo.ovatheme.com/aovis/"
                                                >
                                                    <input
                                                        type="search"
                                                        className="search-field"
                                                        placeholder="Search …"
                                                        value={query}
                                                        name="s"
                                                        title="Search for:"
                                                        onChange={(e) => setQuery(e.target.value)}
                                                    />
                                                    <button type="submit" className="search-submit">
                                                        <i className="ovaicon ovaicon-search"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-417694b elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon"
                                data-id="417694b"
                                data-element_type="widget"
                                data-widget_type="icon.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-icon-wrapper">
                                        <a className="elementor-icon" href="/my-account">
                                            <i
                                                aria-hidden="true"
                                                className="ovaicon ovaicon-user-1"
                                            ></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Header;
