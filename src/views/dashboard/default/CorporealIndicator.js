import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Box, Popper, Avatar, Grid, Menu, MenuItem, Typography, Button } from '@material-ui/core';

// project imports


// assets

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
        padding: '20px 0 40px 0'
    },  
    bottomBody:{
        display: 'flex',
        justifyContent:'center',
    },  
    imc:{
        fontSize: '64px',
        padding: '0 5px 0 10px',
    },
    metabolismo:{
        fontSize: '64px',
        paddingBottom: '10px',
    },
    percentualGordura:{
        fontSize: '36px',
    },
    gorduraViceral:{
        fontSize: '36px',
    },
    musculoEsquletico:{
        fontSize: '36px',
    },
}));

//===========================|| DASHBOARD DEFAULT - CORPOREAL INDICATOR ||===========================//

const CorporealIndicator = ({ imc, metabolismo, percentualGordura, gorduraViceral, musculoEsquletico }) => {
    const classes = useStyles();

    return (
        <Grid container direction="column" alignItems='center' className={classes.content}>
            <Grid item >
                <Grid container direction="row" alignItems='center' className={classes.topBody} spacing={3}>
                    <Grid item >
                        <Grid container direction="row" alignItems="center">
                            <Grid item className={classes.imc}>{imc}</Grid>
                            <Grid item >imc</Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" alignItems="center">
                            <Grid item className={classes.metabolismo}>{metabolismo}</Grid>
                            <Grid item >metabolismo</Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item >
                    <Grid container direction="row" alignItems='center' className={classes.bottomBody} spacing={2}>
                        <Grid item >
                            <Grid container direction="column" alignItems="center">
                                <Grid item className={classes.percentualGordura}>{percentualGordura}</Grid>
                                <Grid item >Percentual de gordura</Grid>
                            </Grid>
                        </Grid>
                        <Grid item >
                            <Grid container direction="column" alignItems="center">
                                <Grid item className={classes.gorduraViceral}>{gorduraViceral}</Grid>
                                <Grid item >Gordura viceral</Grid>
                            </Grid>
                        </Grid>
                        <Grid item >
                            <Grid container direction="column" alignItems="center">
                                <Grid item className={classes.musculoEsquletico}>{musculoEsquletico}</Grid>
                                <Grid item >Músculo esquelético</Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

CorporealIndicator.propTypes = {
    isLoading: PropTypes.bool
};

export default CorporealIndicator;
