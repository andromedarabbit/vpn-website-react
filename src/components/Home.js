import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {Link} from "react-router-dom";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ExploreIcon from '@material-ui/icons/Explore';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import img0502 from '../assets/anakwa_tothesememories.jpg';

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
            <div className={classes.grow}>
              <Button color="inherit" href="/" disableRipple={true} disableFocusRipple={true}>
                <Typography variant="h6" color="inherit">Uncharted VPN</Typography>
              </Button>
            </div>
            
            <Button color="inherit" style={{position:'absolute', right: 10}}><Link to="/login">Login / SignUp</Link></Button>
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
            <Grid xs={7} item>
              <Typography variant="h5" component="h2">
                Why use Our Service?
              </Typography>
            </Grid>
            <Grid className={classes.description} xs={7} item>
              <Card style={{marginBottom: 20}}>
                <CardContent style={{display: 'flex', flexDirection: 'row'}}>
                  <div style={{marginRight: 20}}>
                    <VerifiedUserIcon style={{fontSize: '4em', height: '100%'}} />
                  </div>
                  <div style={{flex: 1}}>
                    <Typography variant="subtitle1">
                      Uncharted VPN makes secure environment.
                    </Typography>
                    <Typography variant="body2">
                      Cutting-edge technologies protect your Internet activity from hackers and malware on public Wi-Fi networks.
                    </Typography>
                  </div>
                </CardContent>
              </Card>
              <Card style={{marginBottom: 20}}>
                <CardContent style={{display: 'flex', flexDirection: 'row'}}>
                  <div style={{marginRight: 20}}>
                    <VisibilityOffIcon style={{fontSize: '4em', height: '100%'}} />
                  </div>
                  <div style={{flex: 1}}>
                    <Typography variant="subtitle1">
                      Hide your browsing history.
                    </Typography>
                    <Typography variant="body2">
                      We do not log user internet activity and share data with third parties.<br />
                      Our VPN service enables internet activity without spying.
                    </Typography>
                  </div>
                </CardContent>
              </Card>
              <Card style={{marginBottom: 20}}>
                <CardContent style={{display: 'flex', flexDirection: 'row'}}>
                  <div style={{marginRight: 20}}>
                    <ExploreIcon style={{fontSize: '4em', height: '100%'}} />
                  </div>
                  <div style={{flex: 1}}>
                    <Typography variant="subtitle1">
                      Free surfing internet without restrictions
                    </Typography>
                    <Typography variant="body2">
                      Uncharted VPN protect the journalists and activists who use our service.<br />
                      We breaks down the barriers of Internet censorship, you can access any website or content.
                    </Typography>
                  </div>
                </CardContent>
              </Card>
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