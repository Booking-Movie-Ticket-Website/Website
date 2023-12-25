import { useDispatch } from 'react-redux';
import Form from './Form';
import DashBoard from './Dashboard';
import { getMovieData } from '~/redux-toolkit/HeaderBanner/HeaderBannerSlice';
function MyAccount() {
    const dispatch = useDispatch();
    dispatch(
        getMovieData({
            bannerRoute: 'My Account',
            movieSrc:
                'https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/background-header-2.jpg',
        }),
    );
    const accessToken = localStorage.getItem('accessToken') || '';
    document.getElementsByTagName('body')[0].className =
        'page-template-default page page-id-12 wp-embed-responsive theme-aovis woocommerce-account woocommerce-page woocommerce-js chrome group-blog layout_1c woo_layout_1c elementor-default elementor-kit-6 e--ua-blink e--ua-chrome e--ua-mac e--ua-webkit';
    return (
        <div className="row_site">
            <div className="container_site">
                <div id="main-content" className="main">
                    {accessToken.length > 0 ? <DashBoard /> : <Form />}
                </div>
            </div>
        </div>
    );
}

export default MyAccount;
