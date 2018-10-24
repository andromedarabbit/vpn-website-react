import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
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
});

class Home extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div style={{zIndex: -1, position: 'absolute', top: 0, width:'100%', height: 500, backgroundImage: `url(${img0502})`, backgroundRepeat:'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        <AppBar position="sticky" className={classes.appBar} color="default">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Uncharted VPN
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12} alignItems="center" justify="center">
              <div item style={{color: 'white', fontSize: 60, fontWeight: 'bold', padding: '200px 0 20px 0'}}>
                Reliable VPN Service
              </div>
              <Button variant="extendedFab" className={classes.button}>
                <CloudDownloadIcon className={classes.extendedIcon} />
                Download Now
              </Button>
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