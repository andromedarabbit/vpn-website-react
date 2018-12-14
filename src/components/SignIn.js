import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Grid,
  TextField,
} from '@material-ui/core';
import TopBar from '../components/TopBar';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
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

class SignIn extends React.Component {
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

  _onClickSignIn = () => {
    const { 
      email, 
      password, 
    } = this.state;

    if (email.length > 0 && password.length > 0) {
      console.info('Allow sign-in!');
    }
  }


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TopBar />
        <Grid className={classes.containerGrid} justify="center" container style={{padding: 50}}>
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
                onChange={this.handleChange('password')}
              />
              <Button 
                variant="contained" 
                className={classes.button} 
                style={{marginTop: 20}}
                onClick={this._onClickSignIn}
              >
                Sign In
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);