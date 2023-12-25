import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import axios from '~/utils/axios';
import { toast } from 'react-toastify';

function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [data, setData] = useState('');
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        (async () => {
            await axios
                .post('auth/sign-up', data, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => {
                    if (response.message === 'sign up successfully') {
                        toast.success('Sign up successfully!', {
                            position: toast.POSITION.TOP_CENTER,
                            hideProgressBar: true,
                        });
                        // const timeout = setTimeout(navigate('/'), 2000);
                        // clearTimeout(timeout);
                    } else {
                        console.log(response);
                    }
                })
                .catch((error) => console.error(error));
        })();
    }, [data]);

    return (
        <form
            onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
            className="woocommerce-form woocommerce-form-register register"
            style={{ display: 'block' }}
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
                    {...register('email', {
                        required: {
                            value: true,
                            message: 'Email is required',
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            message: 'Email wrong syntax',
                        },
                    })}
                />
                <span style={{ color: 'red' }}>{errors.email?.message}</span>
            </p>
            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label htmlFor="reg_password">
                    Password&nbsp;
                    <span className="required">*</span>
                </label>
                <input
                    type="password"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    name="password"
                    id="reg_password"
                    autoComplete="password"
                    {...register('password', {
                        required: {
                            value: true,
                            message: 'Password is required',
                        },
                        minLength: {
                            value: 8,
                            message: 'Password must contain more than 8 characters',
                        },
                    })}
                />
                <span className="show-password-input" onClick={() => setVisible(!isVisible)}></span>
                <span style={{ color: 'red' }}>{errors.password?.message}</span>
            </p>
            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label htmlFor="reg_firstName">
                    First Name&nbsp;
                    <span className="required">*</span>
                </label>
                <input
                    type="text"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    name="firstName"
                    id="reg_firstName"
                    autoComplete="firstName"
                    {...register('firstName', {
                        required: {
                            value: true,
                            message: 'First Name is required',
                        },
                        pattern: {
                            value: /^[a-zA-Z][a-zA-Z '-.,]{0,30}$/,
                            message: 'First Name wrong syntax',
                        },
                    })}
                />
                <span style={{ color: 'red' }}>{errors.firstName?.message}</span>
            </p>

            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label htmlFor="reg_lastName">
                    Last Name&nbsp;
                    <span className="required">*</span>
                </label>
                <input
                    type="text"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    name="lastName"
                    id="reg_lastName"
                    autoComplete="lastName"
                    {...register('lastName', {
                        required: {
                            value: true,
                            message: 'Last Name is required',
                        },
                        pattern: {
                            value: /^[a-zA-Z][a-zA-Z '-.,]{0,30}$/,
                            message: 'Last Name wrong syntax',
                        },
                    })}
                />
                <span style={{ color: 'red' }}>{errors.lastName?.message}</span>
            </p>

            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label htmlFor="reg_lastname">
                    Gender&nbsp;
                    <span className="required">*</span>
                </label>
                <select {...register('gender')}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </p>

            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label htmlFor="reg_phonename">
                    Phone number&nbsp;
                    <span className="required">*</span>
                </label>
                <input
                    type="text"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    name="phoneNumber"
                    id="reg_phoneNumber"
                    autoComplete="phoneNumber"
                    {...register('phoneNumber', {
                        required: {
                            value: true,
                            message: 'Phone Number is required',
                        },
                        pattern: {
                            value: /^0\d{9,}$/,
                            message: 'Wrong Phone Number',
                        },
                    })}
                />
                <span style={{ color: 'red' }}>{errors.phoneNumber?.message}</span>
            </p>

            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label htmlFor="reg_address">
                    Address&nbsp;
                    <span className="required">*</span>
                </label>
                <input
                    type="text"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    name="address"
                    id="reg_address"
                    {...register('address', {
                        required: {
                            value: true,
                            message: 'Address is required',
                        },
                        pattern: {
                            value: /^[\w\s,.'-]+[\r\n]?[\w\s,.'-]+$/,
                            message: 'Address wrong syntax',
                        },
                    })}
                />

                <span style={{ color: 'red' }}>{errors.address?.message}</span>
            </p>

            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label htmlFor="reg_dateOfBirth">
                    Date of birth&nbsp;
                    <span className="required">*</span>
                </label>
                <input
                    type="date"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    name="dateOfBirth"
                    id="reg_dateOfBirth"
                    {...register('dateOfBirth', {
                        required: {
                            value: true,
                            message: 'Date of birth is required',
                        },
                    })}
                />

                <span style={{ color: 'red' }}>{errors.dateOfBirth?.message}</span>
            </p>

            <button type="submit">Sign Up</button>
        </form>
        // <form
        //     method="post"
        //     className="woocommerce-form woocommerce-form-register register"
        //     style={{ display: 'block' }}
        // >
        //     <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        //         <label htmlFor="reg_email">
        //             Email address&nbsp;
        //             <span className="required">*</span>
        //         </label>
        //         <input
        //             type="email"
        //             className="woocommerce-Input woocommerce-Input--text input-text"
        //             name="email"
        //             id="reg_email"
        //             autoComplete="email"
        //             value=""
        //         />
        //     </p>

        //     <p>A link to set a new password will be sent to your email address.</p>

        //     <div className="woocommerce-privacy-policy-text">
        //         <p>
        //             Your personal data will be used to support your experience throughout this
        //             website, to manage access to your account, and for other purposes described in
        //             our
        //             <a
        //                 href="privacy-policy"
        //                 className="woocommerce-privacy-policy-link"
        //                 rel="noreferrer"
        //                 target="_blank"
        //             >
        //                 privacy policy
        //             </a>
        //             .
        //         </p>
        //     </div>
        //     <p className="woocommerce-form-row form-row">
        //         <input
        //             type="hidden"
        //             id="woocommerce-register-nonce"
        //             name="woocommerce-register-nonce"
        //             value="1427c930ad"
        //         />
        //         <input type="hidden" name="_wp_http_referer" value="/aovis/my-account/" />
        //         <button
        //             type="submit"
        //             className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
        //             name="register"
        //             value="Register"
        //         >
        //             Register
        //         </button>
        //     </p>
        // </form>
    );
}

export default SignUp;
