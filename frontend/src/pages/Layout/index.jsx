import Header from '~/components/layouts/Header';
import { Outlet } from 'react-router-dom';
import Footer from '~/components/layouts/Footer';
import HeaderBanner from '~/components/layouts/HeaderBanner';
import HeaderSeparator from '~/components/layouts/HeaderSeparator';
import SecondaryHeader from '~/components/layouts/SecondaryHeader';
import Breadcrumb from '~/components/layouts/Breadcrumbs';
import TrailerModal from '~/components/layouts/TrailerModal';
function Layout() {
    return (
        <>
            <div className="App">
                <div className="inside-content">
                    {window.location.pathname === '/' ? (
                        <>
                            <div
                                data-elementor-type="wp-post"
                                data-elementor-id="34"
                                className="elementor elementor-34"
                            >
                                <Header />
                            </div>
                            <Outlet />
                        </>
                    ) : window.location.pathname.includes('/blogs') ||
                      window.location.pathname.includes('/checkout') ||
                      window.location.pathname.includes('/cart-movies') ||
                      window.location.pathname.includes('/orderdetails') ? (
                        <>
                            <div
                                data-elementor-type="wp-post"
                                data-elementor-id="108"
                                className="elementor elementor-108"
                            >
                                <SecondaryHeader />
                                <Breadcrumb />
                            </div>
                            <div
                                data-elementor-type="wp-page"
                                data-elementor-id="4156"
                                className="elementor elementor-4156"
                            >
                                <Outlet />
                            </div>
                        </>
                    ) : (
                        <>
                            <div
                                data-elementor-type="wp-post"
                                data-elementor-id="108"
                                className="elementor elementor-108"
                            >
                                <Header />
                                <HeaderBanner />
                                <HeaderSeparator />
                            </div>
                            <div
                                data-elementor-type="wp-page"
                                data-elementor-id="4156"
                                className="elementor elementor-4156"
                            >
                                <Outlet />
                            </div>
                        </>
                    )}
                </div>
                <div className="wrap_footer">
                    <Footer />
                </div>
            </div>
            <TrailerModal />
        </>
    );
}

export default Layout;
