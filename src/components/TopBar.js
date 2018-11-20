import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { withRouter } from "react-router";

const styles = theme => ({
  appBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  },
  grow: {
    flexGrow: 1,
    textAlign: 'center',
  },
});

class TopBar extends React.Component {
  _onClickSignUp = event => {
    this.props.history.push({pathname: "/signup"});
  }

  _onClickLogin = event => {
    this.props.history.push({pathname: "/login"});
  }

  _onClickHome = event => {
    this.props.history.push({pathname: "/"});
  }

  render () {
    const { classes } = this.props;
    
    return (
      <AppBar position="sticky" className={classes.appBar} color="default">
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={2}>
            </Grid>

            <Grid item xs={8} style={{textAlign: "center"}}>
              <Button color="inherit" disableRipple={true} disableFocusRipple={true} onClick={this._onClickHome}>
                <Typography variant="h6" color="inherit">Uncharted VPN</Typography>
              </Button>
            </Grid>

            <Grid item xs={2} style={{textAlign: "right"}}>
              <Button color="inherit" onClick={this._onClickSignUp}>SIGNUP</Button>
              <Button color="inherit" onClick={this._onClickLogin}>LOGIN</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(TopBar));