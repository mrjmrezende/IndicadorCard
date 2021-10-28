import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Skeleton } from '@material-ui/core';

// style constant
const useStyles = makeStyles({
    cardHeading: {
        marginRight: '8px',
        marginTop: '18px',
        marginBottom: '14px'
    }
});

//-----------------------|| SKELETON EARNING CARD ||-----------------------//

const IndicadoresCard = () => {
    const classes = useStyles();
    return (
        <Card>
            <CardContent>
                <Grid container direction="column">
                    <Grid container direction="row" >
                        <Grid item>
                            <Grid container direction="column" alignItems="center">
                                <Grid item >
                                    <Skeleton variant="rect" width={44} height={44} />
                                </Grid>
                                <Grid item className={classes.subTitle}>
                                    <Skeleton variant="rect" width={34} height={34} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Skeleton variant="rect" height={30} />
                        </Grid>
                    </Grid>
                    <Grid item>
                        
                    </Grid>
                    <Grid item >
                        <Skeleton variant="rect" height={30} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>



                
    );
};

export default IndicadoresCard;
