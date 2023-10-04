import Header from '~/components/layouts/Header';
import { Outlet } from 'react-router-dom';
import Footer from '~/components/layouts/Footer';

function Layout() {
    return (
        <div className="App">
            <Header />
            <div className="inside-content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
