import Header from '~/components/layouts/Header';
import { Outlet } from 'react-router-dom';
import Footer from '~/components/layouts/Footer';
import HeaderBanner from '~/components/layouts/HeaderBanner';
import HeaderSeparator from '~/components/layouts/HeaderSeparator';

function Layout() {
    return (
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
    );
}

export default Layout;
