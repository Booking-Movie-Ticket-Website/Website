import Navbar from '~/components/layouts/Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className="App">
            <Navbar />
            <div className="main-page">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
