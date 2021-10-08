import PropTypes from "prop-types";
import React from "react";

import { useDispatch, useSelector } from "react-redux";

// material-ui
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Popper,
  Avatar,
  Grid,
  Menu,
  MenuItem,
  Typography
} from "@material-ui/core";

// project imports
import MainCard from "./../../../ui-component/cards/MainCard";
import SkeletonEarningCard from "./../../../ui-component/cards/Skeleton/EarningCard";

// assets
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import GetAppTwoToneIcon from "@material-ui/icons/GetAppOutlined";
import FileCopyTwoToneIcon from "@material-ui/icons/FileCopyOutlined";
import PictureAsPdfTwoToneIcon from "@material-ui/icons/PictureAsPdfOutlined";
import ArchiveTwoToneIcon from "@material-ui/icons/ArchiveOutlined";

// style constant
const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.secondary.dark,
    color: "#fff",
    overflow: "hidden",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      width: "210px",
      height: "210px",
      background: theme.palette.secondary[800],
      borderRadius: "50%",
      top: "-85px",
      right: "-95px",
      [theme.breakpoints.down("xs")]: {
        top: "-105px",
        right: "-140px"
      }
    },
    "&:before": {
      content: '""',
      position: "absolute",
      width: "210px",
      height: "210px",
      background: theme.palette.secondary[800],
      borderRadius: "50%",
      top: "-125px",
      right: "-15px",
      opacity: 0.5,
      [theme.breakpoints.down("xs")]: {
        top: "-155px",
        right: "-70px"
      }
    }
  },
  content: {
    padding: "20px !important"
  },
  avatar: {
    ...theme.typography.commonAvatar,
    ...theme.typography.largeAvatar,
    backgroundColor: theme.palette.secondary[800],
    marginTop: "8px"
  },
  avatarRight: {
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary[200],
    zIndex: 1
  },
  cardHeading: {
    fontSize: "2.125rem",
    fontWeight: 500,
    marginRight: "8px",
    marginTop: "14px",
    marginBottom: "6px"
  },
  subHeading: {
    fontSize: "1rem",
    fontWeight: 500,
    color: theme.palette.secondary[200]
  },
  avatarCircle: {
    cursor: "pointer",
    ...theme.typography.smallAvatar,
    backgroundColor: theme.palette.secondary[200],
    color: theme.palette.secondary.dark
  },
  circleIcon: {
    transform: "rotate3d(1, 1, 1, 45deg)"
  },
  menuItem: {
    marginTop: "10px",
    marginRight: "20px",
    fontSize: "1.45rem"
  }
}));

//===========================|| DASHBOARD DEFAULT - EARNING CARD ||===========================//

const EarningCard = ({ isLoading }) => {
  const classes = useStyles();
  const [glicemia, setglicemia] = React.useState(0);
  // const [items, setItems] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElPop, setAnchorElPop] = React.useState(null);

  const account = useSelector((state) => state.account);
  const dispatcher = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // console.log(account.token);
  const handleGravar = () => {
    const QueryDadoVital = {
      TemperaturaCorporal: 2220,
      Glicemia: 80,
      PercOxigenio: 22298
    };

    // console.log(account.token);

    setAnchorEl(null);
    fetch(
      "https://backend.dyagnosys.tk/api/datahealth/edit/615c7cbdb6f93d00071a59b8",
      {
        method: "put",
        headers: new Headers({
          Authorization: `${account.token}`,
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({ DadoVital: QueryDadoVital })
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log("error"));
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const PopupTri = (event) => {
    setAnchorElPop(anchorElPop ? null : event.currentTarget);
  };

  const open2 = Boolean(anchorEl);
  const id = open2 ? "simple-popper" : undefined;

  const handleConsultar = () => {
    fetch(
      "https://backend.dyagnosys.tk/api/datahealth/615c7cbdb6f93d00071a59b8",
      {
        method: "get",
        headers: new Headers({
          Authorization: `${account.token}`,
          "Content-Type": "application/json"
        })
      }
    )
      .then((res) => res.json())
      .then((result) => {
        // console.log(result)
        const { TemperaturaCorporal, Glicemia, PercOxigenio, Data } = result;
        setglicemia(Glicemia);
      })
      .catch((err) => console.log("error"));
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <MainCard
          border={false}
          className={classes.card}
          contentClass={classes.content}
        >
          <Grid container direction="column">
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  {/* <Avatar variant="rounded" className={classes.avatar}>
                                        <img src={EarningIcon} alt="Notification" />
                                    </Avatar> */}
                </Grid>
                <Grid item>
                  <Avatar
                    variant="rounded"
                    className={classes.avatarRight}
                    aria-controls="menu-earning-card"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreHorizIcon fontSize="inherit" />
                  </Avatar>
                  <Menu
                    id="menu-earning-card"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    variant="selectedMenu"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                  >
                    <MenuItem onClick={handleGravar}>
                      <GetAppTwoToneIcon
                        fontSize="inherit"
                        className={classes.menuItem}
                      />
                      Inserir
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <PictureAsPdfTwoToneIcon
                        fontSize="inherit"
                        className={classes.menuItem}
                      />
                      Alterar
                    </MenuItem>
                    <MenuItem onClick={handleConsultar}>
                      <FileCopyTwoToneIcon
                        fontSize="inherit"
                        className={classes.menuItem}
                      />
                      Consultar
                    </MenuItem>

                    <MenuItem onClick={PopupTri}>
                      <ArchiveTwoToneIcon
                        fontSize="inherit"
                        className={classes.menuItem}
                      />
                      Sobre a Glicemia
                      <div>
                        {/* <Popper id={id} open={open2} anchorEl={anchorElPop}>
                                                    <Box fontSize="inherit" className={classes.menuItem} sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                                                        <img src={sobreGlicemia} alt="Notification" width="400px" height="200px" />
                                                    </Box>
                                                </Popper> */}
                      </div>
                    </MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography className={classes.cardHeading}>
                    {glicemia} mg/dL
                  </Typography>
                </Grid>

                <Grid item>
                  <Avatar className={classes.avatarCircle}>
                    <ArrowUpwardIcon
                      fontSize="inherit"
                      className={classes.circleIcon}
                    />
                  </Avatar>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ mb: 1.25 }}>
              <Typography className={classes.subHeading}>Glicemia</Typography>
            </Grid>
          </Grid>
        </MainCard>
      )}
    </React.Fragment>
  );
};

EarningCard.propTypes = {
  isLoading: PropTypes.bool
};

export default EarningCard;
