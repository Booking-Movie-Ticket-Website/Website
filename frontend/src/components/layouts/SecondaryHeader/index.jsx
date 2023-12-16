function SecondaryHeader() {
    return (
        <>
            <div className="row_site">
                <div className="container_site">
                    <header className="wrap_header">
                        <div className="site-brand">
                            <a href="/" className="navbar-brand">
                                <img
                                    src="/src/assets/images/logo_black.png"
                                    alt="CineWorld - Logo"
                                />
                            </a>
                        </div>

                        <nav className="main-navigation" role="navigation">
                            <button className="menu-toggle">
                                <span>Menu</span>
                            </button>
                            <div className="primary-navigation">
                                <ul id="menu-primary-menu" className="menu">
                                    <li
                                        id="menu-item-62"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62"
                                    >
                                        <a href="/">Home</a>
                                    </li>
                                    <li
                                        id="menu-item-63"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62"
                                    >
                                        <a href="/movies-all">Movies</a>
                                    </li>
                                    <li
                                        id="menu-item-62"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62"
                                    >
                                        <a href="/news">News</a>
                                    </li>
                                    <li
                                        id="menu-item-62"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62"
                                    >
                                        <a href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                </div>
            </div>
        </>
    );
}
export default SecondaryHeader;
