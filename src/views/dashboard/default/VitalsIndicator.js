import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Box, Popper, Avatar, Grid, Menu, MenuItem, Typography, Button } from '@material-ui/core';
import { grid } from '@material-ui/system';

// project imports


// assets
import GlicemiaIcon from './../../../assets/images/icons/glicemia.svg';

// style constant
const useStyles = makeStyles((theme) => ({
    content:{
        color: "rgb(0,17,51)",
        fontFamily: "Roboto",
        fontWeight: '500',
        lineHeight: '24px',
    },
    topBody:{
        justifyContent:'center',
        padding: '20px 0 20px 0'
    },  
    bottomBody:{
        display: 'flex',
        justifyContent:'center',
    },  
    temperatura:{
        fontSize: '48px',
    },
    oximetria:{
        fontSize: '36px',
        paddingBottom: '5px',
    },
    glicemia:{
        fontSize: '36px',
    },
    status:{
        backgroundColor: 'red',
        borderRadius: '30px',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',  
        textTransform: 'uppercase',
        padding: '0 15px 0 15px',
        fontSize: '12px',
        fontWeight: '700',
        lineHeight: '25px',
    },
    subtitle:{
        fontSize: '10px'
    },
    span:{
        fontSize: '30px',
        color: 'rgba(11, 159, 238, 1)'
    },
    smContainer:{
        border: '1px solid rgba(11, 159, 238, 1)',
        borderRadius: '20px',
        padding: '10px 10px 0 10px',
        marginBottom: '10px'
    }
}));

//===========================|| DASHBOARD DEFAULT - VITALS INDICATOR ||===========================//

const VitalsIndicator = ({ temperatura, status, oximetria, glicemia }) => {
    const classes = useStyles();

    return (
        <Grid container direction="column" alignItems='center' className={classes.content}>
            <Grid item >
                <Grid container direction="column" alignItems='center' className={classes.topBody} >
                    <Grid item >
                        <Grid container direction="column" alignItems="center">
                            <Grid item className={classes.temperatura}>{temperatura}<span className={classes.span}>°C</span> </Grid>
                            <Grid item className={classes.subtitle}>Temperatura corporal</Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Grid item className={classes.status} >{status}</Grid>
                    </Grid>
                </Grid>
                <Grid item >
                    <Grid container direction="row" alignItems='center' className={classes.bottomBody} spacing={2}>
                        <Grid item >
                            <Grid container direction="column" alignItems="center" className={classes.smContainer}>
                                <Grid item className={classes.oximetria}>{oximetria}</Grid>
                                <Grid item className={classes.subtitle}>Oximetria <span className={classes.span}>O<span className={classes.subtitle}>2</span></span></Grid>
                            </Grid>
                        </Grid>
                        <Grid item >
                            <Grid container direction="column" alignItems="center" className={classes.smContainer} >
                                <Grid item >
                                    <Grid container direction="row" alignItems="center" >
                                        <Grid item>
                                            <Grid container direction="column" alignItems="center" >
                                                <Grid item className={classes.glicemia}>{glicemia}</Grid>
                                                <Grid item className={classes.subtitle}>mg/dL</Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <img src={GlicemiaIcon} alt="Glicemia" />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item >
                                    <Grid item className={classes.subtitle}>Glicemia</Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

VitalsIndicator.propTypes = {
    isLoading: PropTypes.bool
};

export default VitalsIndicator;
