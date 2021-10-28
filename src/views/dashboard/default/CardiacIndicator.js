import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Box, Popper, Avatar, Grid, Menu, MenuItem, Typography, Button } from '@material-ui/core';

// project imports
import MainCard from '../../../ui-component/cards/MainCard';
import SkeletonIndicatorsCard from '../../../ui-component/cards/Skeleton/IndicatorsCard';

// assets
import HeartIcon from './../../../assets/images/icons/heart.svg';
import HeartBeatIcon from './../../../assets/images/icons/heart-beat.svg';

// style constant
const useStyles = makeStyles((theme) => ({
    content:{
        color: "rgb(0,17,51)",
        fontFamily: "Roboto",
        fontWeight: '500',
        lineHeight: '24px',
    },
    topBody:{
        justifyContent:'space-between',
        padding: '20px'
    },    
    bpm:{
        fontSize: '64px',
        paddingBottom: '10px',
    },
    sistole:{
        fontSize: '36px',
    },
    diastole:{
        paddingTop: '10px',
        fontSize: '36px',
    },
    mercurio:{
        fontSize: '36px',
    },
    frequency:{
        backgroundColor: 'silver',
        borderRadius: '50%',
        width: '23px',
        height: '23px',
    },
    icons:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',  
    },
}));

//===========================|| DASHBOARD DEFAULT - CARDIAC INDICATOR ||===========================//

const CardiacIndicator = ({ bpm, sistole, diastole, mercurio, body }) => {
    const classes = useStyles();

    return (
        <Grid container direction="column" alignItems='center' className={classes.content}>
            <Grid item >
                <Grid container direction="row" alignItems='center' className={classes.topBody} spacing={5}>
                    <Grid item >
                        <Grid container direction="column" alignItems="center">
                            <Grid item className={classes.bpm}>{bpm}</Grid>
                            <Grid item >bpm</Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Grid container direction="column" alignItems="center">
                            <Grid item className={classes.sistole}>{sistole}</Grid>
                            <Grid item >sistole</Grid>
                        </Grid>
                        <Grid container direction="column" alignItems="center">
                            <Grid item className={classes.diastole}>{diastole}</Grid>
                            <Grid item >diastole</Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Grid container direction="column" alignItems="center">
                            <Grid item className={classes.mercurio}>{mercurio}</Grid>
                            <Grid item >mmHg</Grid>
                        </Grid>
                        <Grid container direction="column" alignItems="center" paddingTop="10px">
                            <Grid item className={classes.frequency} />
                            <Grid item >Frequência Irregular</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
                <Grid container direction="row" className={classes.icons} spacing={5} >
                    <Grid item >
                        <img src={HeartIcon} alt="Heart" />
                    </Grid>
                    <Grid item >
                        <img src={HeartBeatIcon} alt="Heart Beat" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

CardiacIndicator.propTypes = {
    isLoading: PropTypes.bool
};

export default CardiacIndicator;
