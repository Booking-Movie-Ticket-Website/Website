import { useState } from 'react';
import SignUp from '../SignUp';
import Login from '../Login';

function Form() {
    const [activeItem, setActiveItem] = useState('login');
    // const [isVisible, setVisible] = useState(false);

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
                        {activeItem === 'login' ? <Login /> : ''}
                    </div>

                    <div className="u-column2 col-2">
                        <h2>Register</h2>
                        {activeItem === 'register' ? <SignUp /> : ''}
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Form;
