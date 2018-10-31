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
import img0502 from '../assets/anakwa_tothesememories.jpg';
import MenuIcon from '@material-ui/icons/Menu';

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
});

class LogInWithSignUp extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div style={{zIndex: -1, position: 'absolute', top: 0, width:'100%', height: 500}}></div>
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
      </div>
    );
  }
}

LogInWithSignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LogInWithSignUp);