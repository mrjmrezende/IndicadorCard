import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Box, Popper, Avatar, Grid, Menu, MenuItem, Typography, Button } from '@material-ui/core';

// project imports
import MainCard from '../../../ui-component/cards/MainCard';
import SkeletonIndicatorsCard from '../../../ui-component/cards/Skeleton/IndicatorsCard';

// assets


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
    },
    content: {
        padding: '0px !important'
    },
    title:{
        padding: '20px 20px 0 10px',
        color: 'rgba(9, 66, 125, 1)',
        display: 'flex',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'Roboto',
        fontSize: '22px',
        fontWeight: 500,
        lineHeight: '24px',       
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
        padding: '0px !important',
        backgroundColor: 'white',
        borderRadius: '30px',
        border: '1px solid rgba(109, 202, 250, 1)',
        color: 'rgba(9, 66, 125, 1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body:{
        
    }
}));

//===========================|| DASHBOARD DEFAULT - INDICATORS CARD ||===========================//

const IndicatorsCard = ({ isLoading, title, subTitle, date, body }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            {isLoading ? (
                <SkeletonIndicatorsCard />
            ) : (
                <MainCard border={false} className={classes.card} contentClass={classes.content}>
                    <Grid container direction="column">
                        <Grid container direction="row" borderBottom="2px solid rgba(109, 202, 250, 1)">
                            <Grid item>
                                <Grid container direction="column" alignItems="center">
                                    <Grid item className={classes.title}>
                                        {title}
                                    </Grid>
                                    <Grid item className={classes.subTitle} >
                                        {subTitle}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item className={classes.topRight}>
                                <Grid item className={classes.date}>
                                    {date}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.body}>
                            {body}
                        </Grid>
                        <Grid item className={classes.bottom}>
                            <Button className={classes.button}>Voltar</Button>
                        </Grid>
                    </Grid>
                </MainCard>
            )}

        </React.Fragment>
    );
};

IndicatorsCard.propTypes = {
    isLoading: PropTypes.bool
};

export default IndicatorsCard;
