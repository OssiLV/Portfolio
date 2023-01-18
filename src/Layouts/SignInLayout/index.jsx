import React from 'react';
import { Link } from 'react-router-dom';
import './SignInLayout.style.scss';
import { Input, Button, Redirect } from '../../components';
import { ForgotPasswordLayout } from '../../Layouts';
function SignInLayout() {
    const [layoutFotgotPass, setLayoutFotgotPass] = React.useState(false);
    const [icon, SetIcon] = React.useState(true);
    const [typePassword, setTypePassword] = React.useState('password');
    const handleShowPassword = () => {
        if (icon) {
            setTypePassword('text');
        } else {
            setTypePassword('password');
        }
        SetIcon(!icon);
    };
    const handlePopupForgotPasswordLayout = () => {
        setLayoutFotgotPass(!layoutFotgotPass);
    };
    return (
        <div className="SignInLayout">
            <div className="SignInBoard">
                <div className="input_signin">
                    <div className="title">Sign In</div>
                    <div className="group email">
                        <i class="icon fa-solid fa-envelope"></i>
                        <Input
                            className="input_email"
                            type="email"
                            placeholder="YourEmail@gmail.com"
                        />
                    </div>
                    <div className="group password">
                        <i class="icon fa-solid fa-key"></i>
                        <Input
                            className="input_password"
                            type={typePassword}
                            placeholder="Your Password"
                        />
                        <div>
                            {icon ? (
                                <i
                                    onClick={handleShowPassword}
                                    class={`icon-showPassword fa-solid fa-eye-slash`}
                                ></i>
                            ) : (
                                <i
                                    onClick={handleShowPassword}
                                    class={`icon-showPassword fa-solid fa-eye`}
                                ></i>
                            )}
                        </div>
                    </div>

                    <Button className="btn_sign-in">Sign In</Button>
                    <div className="no-account">
                        Don't have an account?{' '}
                        <Link className="register" to="/register">
                            Register here
                        </Link>
                    </div>
                    <Link
                        className="forgot_password"
                        to="#"
                        onClick={handlePopupForgotPasswordLayout}
                    >
                        Forgot password?
                    </Link>
                </div>
            </div>
            {layoutFotgotPass ? (
                <ForgotPasswordLayout>
                    <Redirect className="back" onClick={handlePopupForgotPasswordLayout}>
                        Back
                    </Redirect>
                </ForgotPasswordLayout>
            ) : (
                ''
            )}
        </div>
    );
}

export default SignInLayout;
