import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Box, Popper, Avatar, Grid, Menu, MenuItem, Typography, Button } from '@material-ui/core';

// project imports
import MainCard from '../../../ui-component/cards/MainCard';
import SkeletonIndicatorsCard from '../../../ui-component/cards/Skeleton/IndicatorsCard';

// assets
import BodyIcon from './../../../assets/images/icons/body.svg';
import AvatarIcon from './../../../assets/images/icons/avatar-user.svg';
import UserIcon from './../../../assets/images/icons/user.svg';
import AgeIcon from './../../../assets/images/icons/age.svg';
import HeightIcon from './../../../assets/images/icons/height.svg';
import WeightIcon from './../../../assets/images/icons/weight.svg';
import BioTipoIcon from './../../../assets/images/icons/biotipo.svg';
import SexoIcon from './../../../assets/images/icons/sexo.svg';

// style constant
const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: 'white',
        borderradius: '20px',
        boxshadow: '0 4px 4px 0 transparentblack',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '3px solid rgba(11, 159, 238, 1)',
        height: '300px'
    },
    header:{
        height: '50px',
        backgroundColor: 'rgba(9, 66, 125, 1)',
        justifyContent: 'center',
        display: 'flex',
        textAlign: 'center',
    },
    avatarIcon:{
        height: '70%'
    },
    bodyIcon:{
        height: '160px'
    },
    content: {
        padding: '0px !important'
    },
    title:{
        padding: '20px 10px 0 0',
        color: 'white',
        display: 'flex',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: '14px',
        justifyContent: 'center',
            
    },
    subTitle:{
        color: 'rgba(11, 159, 238, 1)',
        display: 'flex',
        textAlign: 'center',
        letterSpacing: '-0.26px',
        fontFamily: 'WorkSans',
        fontSize: '13px',
        fontWeight: 400,
        lineHeight: 'normal',
    },
    topRight:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(109, 202, 250, 1)',
        borderRadius:"0 0 0 30px",
    },
    date:{
        margin: '0 5px 0 5px',
        backgroundColor: 'white',
        borderRadius: '31px',
        padding: '0 7px 0.5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom:{
        borderTop:"2px solid rgba(109, 202, 250, 1)",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 10px',
    },
    button:{
        marginLeft: '80px',
        padding: '0px !important',
        backgroundColor: 'white',
        borderRadius: '30px',
        border: '1px solid red',
        color: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10px'
    },
    buttonBlue:{
        padding: '0 10px 0 10px',
        backgroundColor: 'white',
        borderRadius: '10px',
        border: '1px solid rgba(11, 159, 238, 1)',
        color: 'rgba(9, 66, 125, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10px'
    },
    body:{
        padding: '20px 10px 0 10px',
        height: '250px'
    }
}));

//===========================|| DASHBOARD DEFAULT - INDICATORS CARD ||===========================//

const IndexCard = ({ isLoading, title, subTitle, date, body }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            {isLoading ? (
                <SkeletonIndicatorsCard />
            ) : (
                <MainCard border={false} className={classes.card} contentClass={classes.content}>
                    <Grid container direction="column" >
                        <Grid item className={classes.header}>
                            <Grid container direction="row">
                                <Grid item >
                                    <img src={AvatarIcon} alt="Avatar" className={classes.avatarIcon} />
                                </Grid>
                                <Grid item className={classes.title}>
                                    {title}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.body} >
                            <Grid container direction="row" spacing={3}>
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item>
                                            <Button className={classes.button}>Alergias</Button>
                                        </Grid>
                                        <Grid item>
                                            <img src={BodyIcon} alt="Body" className={classes.bodyIcon} />
                                        </Grid>
                                        <Grid item >
                                            <Grid container direction="column" alignItems="center" justifyContent="center">
                                                <Grid item>IMC</Grid>
                                                <Grid item>25</Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item paddingBottom="10px" borderBottom="1px solid rgba(11, 159, 238, 1)">
                                            <img src={UserIcon} alt="User" /> Fulano de tal
                                        </Grid>
                                        <Grid item paddingTop="5px">
                                            <img src={AgeIcon} alt="Age" /> 32 anos
                                        </Grid>
                                        <Grid item paddingTop="5px">
                                            <img src={HeightIcon} alt="Height" /> 1,72 m
                                        </Grid>
                                        <Grid item paddingTop="5px">
                                            <img src={WeightIcon} alt="Weight" /> 75 kg
                                        </Grid>
                                        <Grid item paddingTop="5px">
                                            <img src={BioTipoIcon} alt="BioTipo" /> 25
                                        </Grid>
                                        <Grid item padding="5px 0 10px 0" borderBottom="1px solid rgba(11, 159, 238, 1)">
                                            <img src={SexoIcon} alt="Sexo" /> Masculino
                                        </Grid>
                                        <Grid item paddingTop="10px">
                                            <Button className={classes.buttonBlue}>Perfil Completo</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            )}

        </React.Fragment>
    );
};

IndexCard.propTypes = {
    isLoading: PropTypes.bool
};

export default IndexCard;
