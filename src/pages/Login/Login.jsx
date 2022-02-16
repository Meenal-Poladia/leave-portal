import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./Login.css"
import logo from "../../assests/company-logo.jpg";
import {EMAIL_REGEX} from "../../constants/regex";
import {useEffect, useState} from "react";
import {Alert} from "@mui/material";

const theme = createTheme();

const Login = () => {
    //Adding values to the input obtained
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Adding functionality to Remember Me button
    const [rememberCredentials, setRememberCredentials] = useState(false);

    //Checking if email and password is valid and error handling
    const [validEmail, setValidEmail] = useState(false);
    const [checkEmail, setCheckEmail] = useState(false);
    const [checkPassword, setCheckPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    //Functions
    //After clicking the login button
    const handleSubmitLogin = (event) => {
        event.preventDefault();

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        // if(checkEmail && checkPassword === !"") {
        //     //Success goes here
        //     if(validEmail && checkPassword === !"") {
        //         console.log(email, password);
        //     }
        // }
        // if(!validEmail || ) {
        //     console.log(`In valid mail`)
        // }
        if(checkEmail && password) {
            if(validEmail){
                console.log(`Email & Password are correct and valid`);
                setErrorMessage(false)
            }
        }
        if(!validEmail) {
            console.log(`Enter valid email`);
            setErrorMessage(true)
        }
        if(password === ""){
            console.log(`Enter valid password`);
            setErrorMessage(true);
        }
    };

    //After clicking the Remember Me button
    const handleClickRememberMe = () => {
        alert(`Remember Me button is being clicked`);
        setRememberCredentials(true);
        if(rememberCredentials) {
            setRememberCredentials(false);

        }
    }

    //UseEffects
    useEffect((e) => {
        setValidEmail(EMAIL_REGEX.test(email));
        setCheckEmail(!!setEmail);
        setCheckPassword(!!setPassword);
    })


    return (
        <section className="login-background-colour">
            <article className="login-divider">
                <figure>
                    <img src={logo} alt="company-logo" className="logo-img"/>
                </figure>
                <div className="login-container">
                    <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ l: 1, bgcolor: 'secondary.main' }}>
                                    {/*<LockOutlinedIcon />*/}
                                </Avatar>
                                <Typography component="h1" variant="h5" sx={{marginBottom : 5, marginTop: 5}}>
                                    Login to React Dashboard
                                </Typography>
                                {errorMessage &&
                                    <Alert severity="error">
                                        Please enter valid Email and password
                                    </Alert>
                                }
                                <Box component="form" onSubmit={handleSubmitLogin} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        pattern={EMAIL_REGEX}
                                        onChange={event => setEmail(event.target.value)}
                                        sx={{marginBottom : 3}}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={event => setPassword(event.target.value)}
                                        sx={{marginBottom : 3}}
                                    />
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={rememberCredentials}
                                                          onChange={handleClickRememberMe}
                                                />
                                            }

                                            label="Remember Me"
                                        />
                                    </FormGroup>
                                    <div className="login-button">
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{
                                                mt: 3,
                                                mb: 2
                                            }}
                                            className="login-button"
                                        >
                                            Login
                                        </Button>
                                    </div>

                                </Box>
                            </Box>
                        </Container>
                    </ThemeProvider>
                </div>
            </article>

        </section>

    );
}
export default Login;