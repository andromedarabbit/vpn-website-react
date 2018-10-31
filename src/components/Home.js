import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import img0502 from '../assets/anakwa_tothesememories.jpg';
import logoWireguard from '../assets/wireguard.svg';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    marginBottom: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  },
  grow: {
    flexGrow: 1,
    textAlign: 'center',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
    background: 'linear-gradient(45deg, tomato 30%, #FF8E53 90%)',
    color: 'white',
    fontSize: '1.1em',
    fontWeight: 'bold',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 200,
  },
  description: theme.typography.body2
});

class Home extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div style={{zIndex: -1, position: 'absolute', top: 0, width:'100%', height: 500, backgroundImage: `url(${img0502})`, backgroundRepeat:'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        <AppBar className={classes.appBar} color="default">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Uncharted VPN
            </Typography>
            <Button color="inherit" href="/login">Login / SignUp</Button>
          </Toolbar>
        </AppBar>
        <div className={classes.root}>
          <Grid container alignItems="center" justify="center" style={{ height: 500 }}>
            <Grid item xs={12} style={{textAlign: 'center'}}>
              <div item style={{color: 'white', fontSize: '4em', fontWeight: 'bold', padding: '160px 0 20px 0'}}>
                Reliable VPN Service
              </div>
              <Button variant="extendedFab" className={classes.button}>
                <CloudDownloadIcon className={classes.extendedIcon} />
                Download Now
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={24} xs={12} justify="center" style={{marginTop: -50}}>
            <Grid item>
              <Paper className={classes.paper}>
                <Grid container justify="center" spacing={16} direction="column">
                  <Grid item>
                    <b>1 Month</b>
                  </Grid>
                  <Divider />
                  <Grid item>
                    $5.0 / mo
                  </Grid>
                  <Grid item>
                    $5.0
                  </Grid>
                  <Grid item>
                    5 Devices
                  </Grid>
                  <Button variant="outlined" fullWidth={true}>
                    Start Now
                  </Button>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <Grid container justify="center" spacing={16} direction="column">
                  <Grid item>
                    <b>3 Month</b>
                  </Grid>
                  <Divider />
                  <Grid item>
                    $4.0 / mo
                  </Grid>
                  <Grid item>
                    $12.0
                  </Grid>
                  <Grid item>
                    5 Devices
                  </Grid>
                  <Button variant="outlined" fullWidth={true}>
                    Start Now
                  </Button>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <Grid container justify="center" spacing={16} direction="column">
                  <Grid item>
                    <b>1 Year</b>
                  </Grid>
                  <Divider />
                  <Grid item>
                    $3.0 / mo
                  </Grid>
                  <Grid item>
                    $36.0
                  </Grid>
                  <Grid item>
                    5 Devices
                  </Grid>
                  <Button variant="outlined" fullWidth={true}>
                    Start Now
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={24} xs={12} justify="center" style={{marginTop: 20}}>
            <Grid className={classes.description} item>
              <img src={logoWireguard} width="200" /><br />
              Our service base on Wireguard aims to be faster, simpler, leaner, and more useful than IPSec.
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);