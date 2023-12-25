import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import axios from '~/utils/axios';

function Login() {
    const [isVisible, setVisible] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [data, setData] = useState('');
    useEffect(() => {
        (async () => {
            await axios
                .post('auth/login', data, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => {
                    if (response.message === 'login successfully') {
                        toast.success('Login successfully!', {
                            position: toast.POSITION.TOP_CENTER,
                            hideProgressBar: true,
                        });
                        localStorage.setItem('accessToken', response.accessToken);
                        location.reload();
                    } else {
                        console.log(response);
                    }
                })
                .catch((error) => console.error(error));
        })();
    }, [data]);

    return (
        <form
            className="woocommerce-form woocommerce-form-login login"
            onSubmit={handleSubmit((data) => {
                setData(data);
            })}
            style={{ display: 'block' }}
        >
            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label htmlFor="email">
                    Email address&nbsp;
                    <span className="required">*</span>
                </label>
                <input
                    type="email"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    name="email"
                    id="email"
                    {...register('email', { required: true })}
                />
                {errors.email && <span>Email không được để trống</span>}
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
                        {...register('password', { required: true })}
                    />
                    {errors.password && <span>Password không được để trống</span>}
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
                    />
                    <span>Remember me</span>
                </label>
                <input
                    type="hidden"
                    id="woocommerce-login-nonce"
                    name="woocommerce-login-nonce"
                    value="58aff3586c"
                />
                <input type="hidden" name="_wp_http_referer" value="/aovis/my-account/" />
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
    );
}

export default Login;
