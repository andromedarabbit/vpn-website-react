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
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { black, red } from 'ansi-colors';

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
  containerGrid: {
    marginTop: window.matchMedia( "(min-width: 600px)" ) ? theme.mixins.toolbar["@media (min-width:600px)"].minHeight : theme.mixins.toolbar["@media (min-width:0px) and (orientation: landscape)"].minHeight
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  containerForm: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  button: {
    margin: theme.spacing.unit,
    background: 'linear-gradient(45deg, tomato 30%, #FF8E53 90%)',
    color: 'white',
    fontSize: '1.1em',
    fontWeight: 'bold',
  },
});

class SignInWithSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} color="default">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <div className={classes.grow}>
              <Button color="inherit" href="/" disableRipple={true} disableFocusRipple={true}>
                <Typography variant="h6" color="inherit">Uncharted VPN</Typography>
              </Button>
            </div>
            <Button disabled={true} href="/login" style={{color: 'transparent'}}>Login / SignUp</Button>
          </Toolbar>
        </AppBar>
        <Grid className={classes.containerGrid} justify="center" container style={{padding: 100}}>
          <Grid item style={{borderRight: "1px solid black", padding: 100}}>
            <form className={classes.containerForm} noValidate autoComplete="off">
              <TextField
                id="signup-email"
                label="E-mail"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange('email')}
                margin="normal"
              />
              <TextField
                id="signup-password"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
              <TextField
                id="signup-confirm-password"
                label="Confirm Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
              <Button variant="extendedFab" className={classes.button}>
                Register Account
              </Button>
            </form>
          </Grid>
          <Grid item style={{padding: 100}}>
            <form className={classes.containerForm} noValidate autoComplete="off">
              <TextField
                id="signup-email"
                label="E-mail"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange('email')}
                margin="normal"
              />
              <TextField
                id="signup-password"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
              <Button variant="extendedFab" className={classes.button}>
                Sign In
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SignInWithSignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignInWithSignUp);