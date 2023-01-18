import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterLayout.style.scss';
import { pictureRegister } from '../../Assets';
import { Button, Input, Cutbar } from '../../components';

function RegisterLayout() {
    const [icon, SetIcon] = React.useState(true);
    const [typePassword, setTypePassword] = React.useState('password');
    const handleShowPassword = () => {
        SetIcon(!icon);
        if (icon) {
            setTypePassword('text');
        } else {
            setTypePassword('password');
        }
    };
    return (
        <form className="RegisterLayout">
            <div className="RegisterBoard">
                <div className="pic_register">
                    <img
                        className="pictureRegister"
                        src={pictureRegister}
                        alt="Picture_Register"
                        width="500"
                        height="333"
                    />
                </div>
                <Cutbar />
                <div className="input_register">
                    <div className="title">Create Your Account</div>
                    <div className="group username">
                        <i class="icon fa-solid fa-user" />
                        <Input className="input_username" type="text" placeholder="User Name" />
                    </div>
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

                    <Button className="btn_create-account">Create My Account</Button>
                    <p className="has_account">
                        Already have an account? <Link to="/signIn">Sign in</Link>
                    </p>
                </div>
            </div>
        </form>
    );
}

export default RegisterLayout;
