function LostPassword() {
    return (
        <>
            <div className="row_site">
                <div className="container_site">
                    <div id="main-content" className="main">
                        <article
                            id="post-12"
                            className="post-wrap  post-12 page type-page status-publish hentry"
                        >
                            <div className="woocommerce">
                                <div className="woocommerce-notices-wrapper"></div>
                                <form
                                    method="post"
                                    className="woocommerce-ResetPassword lost_reset_password"
                                >
                                    <p>
                                        Lost your password? Please enter your username or email
                                        address. You will receive a link to create a new password
                                        via email.
                                    </p>
                                    <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
                                        <label htmlFor="user_login">Username or email</label>
                                        <input
                                            className="woocommerce-Input woocommerce-Input--text input-text"
                                            type="text"
                                            name="user_login"
                                            id="user_login"
                                            autoComplete="username"
                                        />
                                    </p>

                                    <div className="clear"></div>

                                    <p className="woocommerce-form-row form-row">
                                        <input
                                            type="hidden"
                                            name="wc_reset_password"
                                            value="true"
                                        />
                                        <button
                                            type="submit"
                                            className="woocommerce-Button button"
                                            value="Reset password"
                                        >
                                            Reset password
                                        </button>
                                    </p>
                                    <input
                                        type="hidden"
                                        id="woocommerce-lost-password-nonce"
                                        name="woocommerce-lost-password-nonce"
                                        value="4c8c2a3542"
                                    />
                                    <input
                                        type="hidden"
                                        name="_wp_http_referer"
                                        value="/aovis/my-account/lost-password/"
                                    />
                                </form>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
}
export default LostPassword;
