import Form from './Form';

function MyAccount() {
    document.getElementsByTagName('body')[0].className =
        'page-template-default page page-id-12 wp-embed-responsive theme-aovis woocommerce-account woocommerce-page woocommerce-js chrome group-blog layout_1c woo_layout_1c elementor-default elementor-kit-6 e--ua-blink e--ua-chrome e--ua-mac e--ua-webkit';
    return (
        <div className="row_site">
            <div className="container_site">
                <div id="main-content" className="main">
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default MyAccount;
