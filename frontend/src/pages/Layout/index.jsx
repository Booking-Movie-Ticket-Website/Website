import Navbar from '~/components/layouts/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '~/components/layouts/Footer';

function Layout() {
    return (
        <div className="App">
            <Navbar />
            <div className="main-page">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
