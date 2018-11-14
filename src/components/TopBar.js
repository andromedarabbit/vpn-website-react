import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Link } from "react-router-dom";

const styles = (theme) => ({
  appBar: {
    marginBottom: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  },
  grow: {
    flexGrow: 1,
    textAlign: 'center',
  },
});

class TopBar extends React.Component {
  render () {
    const { classes } = this.props;
    
    return (
      <AppBar className={classes.appBar} color="default">
        <Toolbar>
          <div className={classes.grow}>
            <Button color="inherit" href="/" disableRipple={true} disableFocusRipple={true}>
              <Typography variant="h6" color="inherit">Uncharted VPN</Typography>
            </Button>
          </div>
          
          <Button color="inherit"><Link to="/signup">SIGNUP</Link></Button>
          <Button color="inherit"><Link to="/login">LOGIN</Link></Button>
        </Toolbar>
      </AppBar>
    )
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopBar);