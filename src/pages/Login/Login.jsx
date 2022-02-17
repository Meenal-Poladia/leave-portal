import * as React from 'react';
import {useRef} from 'react';
import Button from '@mui/material/Button';
import "./Login.css"
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"
import {validatedEmployeeID} from "../../actions";

const Login = () => {
    const loginDetails = useSelector((state) => state.leavePortalReducer.employeeData);

    const usernameInput = useRef();
    const passwordInput = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validateCredentials = (username, password) => {
        const foundValue = loginDetails.find(item => {
            return item.username.toLowerCase() === username && item.password.toLowerCase() === password;
        });
        dispatch(validatedEmployeeID(foundValue.id))
        return !!foundValue;
    }


    const handleSubmitLogin = (e) => {
        e.preventDefault();
        let username =  usernameInput.current.value.toLowerCase();
        let password = passwordInput.current.value.toLowerCase();
        const isValid = validateCredentials(username, password);

        if (isValid) {
            navigate("/dashboard");
        }

        usernameInput.current.value = ""
        passwordInput.current.value = ""
    }

    return (
        <>
            <div className="login-container">
                <div className="login-form">
                    <h2 className="login-heading">
                        Login to the Leave Portal
                    </h2>
                    <form
                        onSubmit={(e) => handleSubmitLogin(e)}>
                            <input
                                type="text"
                                id="username"
                                placeholder="Username"
                                name="username"
                                className="login-input"
                                ref={usernameInput}
                                required
                            />
                            <input
                                type="text"
                                id="password"
                                placeholder="Password"
                                name="password"
                                className="login-input"
                                ref={passwordInput}
                                required
                            />
                        <Button
                            type="submit"
                            variant="contained"
                            className="submit-button"
                            sx={{
                                mt: 3,
                                mb: 2
                            }}>
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;