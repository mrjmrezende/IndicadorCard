import 'dotenv/config';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ACCOUNT_INITIALIZE } from './../../../../store/actions';
// material-ui
import { useTheme } from '@material-ui/core';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@material-ui/core';

// project imports
import AuthWrapper1 from './../AuthWrapper1';
import AuthCardWrapper from './../AuthCardWrapper';
import useScriptRef from '../../../../hooks/useScriptRef';
// import Logo from './../../../../ui-component/Logo';
import RestRegister from './RestRegister';
import AuthFooter from './../../../../ui-component/cards/AuthFooter';

import { GoogleLogin } from "react-google-login";
// assets

//===============================|| AUTH3 - REGISTER ||===============================//

const Register = () => {
    let history = useHistory();
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
    const scriptedRef = useScriptRef();
    const dispatcher = useDispatch();
    const [checked, setChecked] = React.useState(true);

    const handleLogin = async googleData => {
        const res = await fetch('https://backend.dyagnosys.tk/api/users/v1/auth/google/cadastrar', {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify({
                token: googleData.tokenId
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()

        
        // console.log(data.password);
        //undefined
        // if (data.password === undefined & password === undefined) { const password = 'Dy2020J';}
        //open ? 'menu-list-grow' : undefined
        const password = 'Dy2020J'
        axios
            .post('https://backend.dyagnosys.tk/api/users/login/',
                {
                    email: data.email,
                    password: password,
                })
            .then(function (response) {
                if (response.data.success) {
                    console.log(response.data);
                    console.log(response.data.user);
                    console.log(response.data.token);
                    dispatcher({
                        type: ACCOUNT_INITIALIZE,
                        payload: { isLoggedIn: true, user: response.data.user, token: response.data.token }
                        // payload: { isLoggedIn: true, user: data.GivenName, token: response.data.tokenjwt }
                    });
                    // history.push('/login');
                    // store returned user somehow
                }
                else {

                }
            })
        // history.push('/login');

        // store returned user in a context?
    }

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item sx={{ mb: 3 }}>
                                        <RouterLink to="#">
                                            {/* <Logo /> */}
                                        </RouterLink>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <GoogleLogin
                                                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                                        buttonText="Cadastrar com Google"
                                                        className="ct-button ct-button--secondary"
                                                        onSuccess={handleLogin}
                                                        onFailure={handleLogin}
                                                        cookiePolicy="single_host_origin"
                                                    />
                                                    <Typography
                                                        color={theme.palette.secondary.main}
                                                        gutterBottom
                                                        variant={matchDownSM ? 'h3' : 'h2'}
                                                    >
                                                        Cadastre-se
                                                    </Typography>
                                                    <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : ''}>
                                                        Digite suas credenciais
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <RestRegister />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography
                                                component={RouterLink}
                                                to="/login"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                            >
                                                Tenho uma conta
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default Register;
