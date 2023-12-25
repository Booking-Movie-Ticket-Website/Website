function Main({ userData }) {
    const handleClick = (e) => {
        e.preventDefault();
        localStorage.removeItem('accessToken');
        location.reload();
    };
    return (
        <div className="woocommerce-MyAccount-content">
            <div className="woocommerce-notices-wrapper"></div>
            <p>
                Hello <strong>{userData.firstName + ' ' + userData.lastName}</strong> (not{' '}
                <strong>{userData.email}</strong>?{' '}
                <a href="" onClick={handleClick}>
                    Log out
                </a>
                )
            </p>
            <p>
                From your account dashboard you can view your <a>recent bookings</a>, manage your
                account, and <a>edit your password and account details</a>.
            </p>
        </div>
    );
}
export default Main;
