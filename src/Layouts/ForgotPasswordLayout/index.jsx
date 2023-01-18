import React from 'react';
import './ForgotPasswordLayout.style.scss';
import { Button, Input, Redirect } from '../../components';
function ForgotPasswordLayout(props) {
    // const [layoutFotgotPass, setLayoutFotgotPass] = React.useState(true);
    const handleClick = () => {
        console.log(props.abc);
    };
    return (
        <div className="ForgotPasswordLayout">
            <div className="ForgotPasswordBoard">
                <div className="input_forgot-password">
                    <div className="title">Forgor password</div>
                    <p className="description">
                        Please enter your registered email address. We'll send instructions to help
                        reset your password
                    </p>
                    <div className="input_group">
                        <div className="group email">
                            <i class="icon fa-solid fa-envelope"></i>
                            <Input
                                className="input_email"
                                type="email"
                                placeholder="YourEmail@gmail.com"
                            />
                        </div>

                        <Button className="btn_send-reset">Send reset instructions</Button>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordLayout;
