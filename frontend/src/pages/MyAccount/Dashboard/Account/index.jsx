import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import axios from '~/utils/axios';
import { toast } from 'react-toastify';
function Account({ userData }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [data, setData] = useState();
    useEffect(() => {
        (async () => {
            const accessToken = localStorage.getItem('accessToken');
            await axios
                .patch('users/my-info', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                .then((response) => {
                    if (response.message === 'sign up successfully') {
                        toast.success('Sign up successfully!', {
                            position: toast.POSITION.TOP_CENTER,
                            hideProgressBar: true,
                        });
                    } else {
                        console.log(response);
                    }
                })
                .catch((error) => console.error(error));
        })();
    }, [data]);
    return (
        <div className="woocommerce-MyAccount-content">
            <div className="woocommerce-notices-wrapper"></div>
            <form
                className="woocommerce-EditAccountForm edit-account"
                onSubmit={handleSubmit((data) => setData(data))}
            >
                <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
                    <label htmlFor="account_first_name">
                        First name&nbsp;<span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        className="woocommerce-Input woocommerce-Input--text input-text"
                        name="account_first_name"
                        id="account_first_name"
                        autoComplete="given-name"
                        placeholder={userData.firstName}
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
                </p>
                <p className="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
                    <label htmlFor="account_last_name">
                        Last name&nbsp;<span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        className="woocommerce-Input woocommerce-Input--text input-text"
                        name="account_last_name"
                        id="account_last_name"
                        autoComplete="family-name"
                        placeholder={userData.lastName}
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
                    <label htmlFor="account_phone">
                        Phone Number&nbsp;<span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        className="woocommerce-Input woocommerce-Input--email input-text"
                        name="account_phone"
                        id="account_phone"
                        placeholder={userData.phoneNumber}
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
                </p>
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label htmlFor="account_address">
                        Address&nbsp;<span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        className="woocommerce-Input woocommerce-Input--email input-text"
                        name="account_address"
                        id="account_address"
                        placeholder={userData.address}
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
                <button
                    type="submit"
                    className="woocommerce-Button button"
                    name="save_account_details"
                    value="Save changes"
                    style={{ marginTop: '2em' }}
                >
                    Save changes
                </button>
            </form>
        </div>
    );
}

export default Account;
