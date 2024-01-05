import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import axios from '~/utils/axios';
import { toast } from 'react-toastify';
function Account() {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();
    const [data, setData] = useState();
    const [isShowingPassWord, setShowing] = useState(() => [false, false, false]);
    useEffect(() => {
        (async () => {
            const accessToken = localStorage.getItem('accessToken');
            await axios
                .patch('users/change-password', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                .then((response) => {
                    if (response.message === 'change password successfully') {
                        toast.success('Change password successfully!', {
                            position: toast.POSITION.TOP_CENTER,
                            hideProgressBar: true,
                        });
                        location.reload();
                    } else {
                        console.log(response);
                    }
                })
                .catch((error) => console.error(error));
        })();
    }, [data]);
    const handleShowPassword = (index) => {
        let newArray = [...isShowingPassWord];
        isShowingPassWord[index] == false ? (newArray[index] = true) : (newArray[index] = false);
        setShowing(newArray);
    };
    return (
        <div className="woocommerce-MyAccount-content">
            <div className="woocommerce-notices-wrapper"></div>
            <form
                className="woocommerce-EditAccountForm edit-account"
                onSubmit={handleSubmit((data) => setData(data))}
            >
                <fieldset>
                    <legend>Password change</legend>

                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="password_current">
                            Current password&nbsp;<span className="required">*</span>
                        </label>

                        <span className="password-input">
                            <input
                                type={isShowingPassWord[0] == true ? 'text' : 'password'}
                                className="woocommerce-Input woocommerce-Input--password input-text"
                                name="password_current"
                                id="password_current"
                                autoComplete="off"
                                {...register('oldPassword', {
                                    required: {
                                        value: true,
                                        message: 'Current Password is required',
                                    },
                                })}
                            />
                            <span
                                className="show-password-input"
                                onClick={() => handleShowPassword(0)}
                            ></span>
                            <span style={{ color: 'red' }}>{errors.oldPassword?.message}</span>
                        </span>
                    </p>
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="password_1">
                            New password&nbsp;<span className="required">*</span>
                        </label>
                        <span className="password-input">
                            <input
                                type={isShowingPassWord[1] == true ? 'text' : 'password'}
                                className="woocommerce-Input woocommerce-Input--password input-text"
                                name="password_1"
                                id="password_1"
                                autoComplete="off"
                                {...register('newPassword', {
                                    required: {
                                        value: true,
                                        message: 'New Password is required',
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Password must contain more than 8 characters',
                                    },
                                })}
                            />
                            <span style={{ color: 'red' }}>{errors.newPassword?.message}</span>

                            <span
                                className="show-password-input"
                                onClick={() => handleShowPassword(1)}
                            ></span>
                        </span>
                    </p>
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="password_2">
                            Confirm new password&nbsp;<span className="required">*</span>
                        </label>
                        <span className="password-input">
                            <input
                                type={isShowingPassWord[2] == true ? 'text' : 'password'}
                                className="woocommerce-Input woocommerce-Input--password input-text"
                                name="password_2"
                                id="password_2"
                                autoComplete="off"
                                {...register('cofirmPassword', {
                                    required: {
                                        value: true,
                                        message: 'Confirm New Password is required',
                                    },
                                    validate: (value) => {
                                        const { newPassword } = getValues();
                                        return newPassword === value || 'Passwords should match!';
                                    },
                                })}
                            />
                            <span style={{ color: 'red' }}>{errors.cofirmPassword?.message}</span>
                            <span
                                className="show-password-input"
                                onClick={() => handleShowPassword(2)}
                            ></span>
                        </span>
                    </p>
                </fieldset>
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
