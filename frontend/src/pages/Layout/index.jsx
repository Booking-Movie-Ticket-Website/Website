import Header from '~/components/layouts/Header';
import { Outlet } from 'react-router-dom';
import Footer from '~/components/layouts/Footer';

function Layout() {
    return (
        <div className="App">
            <div className="inside-content">
                <Header />

                <Outlet />
            </div>
            <div className="wrap_footer">
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
