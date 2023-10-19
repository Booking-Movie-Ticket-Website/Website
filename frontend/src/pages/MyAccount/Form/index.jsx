import { useState } from 'react';

function Form() {
    const [activeItem, setActiveItem] = useState('login');
    const [isVisible, setVisible] = useState(false);
    const [emailValue, setEmailValue] = useState('');

    const handleItemClick = (type) => {
        setActiveItem(type);
    };
    return (
        <article id="post-12" className="post-wrap  post-12 page type-page status-publish hentry">
            <div className="woocommerce">
                <div className="woocommerce-notices-wrapper"></div>
                <ul className="ova-login-register-woo">
                    <li className={activeItem === 'login' ? 'active' : ''}>
                        <a
                            href="javascript:void(0)"
                            data-type="login"
                            onClick={() => handleItemClick('login')}
                        >
                            Login{' '}
                        </a>
                    </li>
                    <li className={activeItem === 'register' ? 'active' : ''}>
                        <a
                            href="javascript:void(0)"
                            data-type="register"
                            onClick={() => handleItemClick('register')}
                        >
                            Register{' '}
                        </a>
                    </li>
                </ul>

                <div className="u-columns col2-set" id="customer_login">
                    <div className="u-column1 col-1">
                        <h2>Login</h2>

                        <form
                            className="woocommerce-form woocommerce-form-login login"
                            method="post"
                            style={{ display: activeItem === 'login' ? 'block' : 'none' }}
                        >
                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <label htmlFor="username">
                                    Username or email address&nbsp;
                                    <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="woocommerce-Input woocommerce-Input--text input-text"
                                    name="username"
                                    id="username"
                                    autoComplete="username"
                                    value={emailValue}
                                    onChange={(e) => setEmailValue(e.target.value)}
                                />{' '}
                            </p>
                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <label htmlFor="password">
                                    Password&nbsp;
                                    <span className="required">*</span>
                                </label>
                                <span className="password-input">
                                    <input
                                        className="woocommerce-Input woocommerce-Input--text input-text"
                                        type={isVisible ? 'text' : 'password'}
                                        name="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                    <span
                                        className="show-password-input"
                                        onClick={() => setVisible(!isVisible)}
                                    ></span>
                                </span>
                            </p>

                            <p className="form-row">
                                <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                                    <input
                                        className="woocommerce-form__input woocommerce-form__input-checkbox"
                                        name="rememberme"
                                        type="checkbox"
                                        id="rememberme"
                                        value="forever"
                                    />{' '}
                                    <span>Remember me</span>
                                </label>
                                <input
                                    type="hidden"
                                    id="woocommerce-login-nonce"
                                    name="woocommerce-login-nonce"
                                    value="58aff3586c"
                                />
                                <input
                                    type="hidden"
                                    name="_wp_http_referer"
                                    value="/aovis/my-account/"
                                />{' '}
                                <button
                                    type="submit"
                                    className="woocommerce-button button woocommerce-form-login__submit"
                                    name="login"
                                    value="Log in"
                                >
                                    Log in
                                </button>
                            </p>
                            <p className="woocommerce-LostPassword lost_password">
                                <a href="/lost-password">Forgot your password?</a>
                            </p>
                        </form>
                    </div>

                    <div className="u-column2 col-2">
                        <h2>Register</h2>

                        <form
                            method="post"
                            className="woocommerce-form woocommerce-form-register register"
                            style={{ display: activeItem === 'register' ? 'block' : 'none' }}
                        >
                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <label htmlFor="reg_email">
                                    Email address&nbsp;
                                    <span className="required">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="woocommerce-Input woocommerce-Input--text input-text"
                                    name="email"
                                    id="reg_email"
                                    autoComplete="email"
                                    value=""
                                />{' '}
                            </p>

                            <p>A link to set a new password will be sent to your email address.</p>

                            <div className="woocommerce-privacy-policy-text">
                                <p>
                                    Your personal data will be used to support your experience
                                    throughout this website, to manage access to your account, and
                                    for other purposes described in our{' '}
                                    <a
                                        href="privacy-policy"
                                        className="woocommerce-privacy-policy-link"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        privacy policy
                                    </a>
                                    .
                                </p>
                            </div>
                            <p className="woocommerce-form-row form-row">
                                <input
                                    type="hidden"
                                    id="woocommerce-register-nonce"
                                    name="woocommerce-register-nonce"
                                    value="1427c930ad"
                                />
                                <input
                                    type="hidden"
                                    name="_wp_http_referer"
                                    value="/aovis/my-account/"
                                />{' '}
                                <button
                                    type="submit"
                                    className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                                    name="register"
                                    value="Register"
                                >
                                    Register
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Form;
