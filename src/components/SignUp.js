import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Radio,
  TextField,
  Typography,
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

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      selectedValue: 'a',
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  _handleChangeSubscription = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TopBar />
        <Grid className={classes.containerGrid} justify="center" container style={{padding: 50}}>
          <Grid item xs={12} style={{padding: 100}}>
            <Grid container justify="center" spacing={32}>
              <Grid item>
                <Card>
                  <Radio
                    style={{position: 'absolute'}}
                    checked={this.state.selectedValue === 'a'}
                    onChange={this._handleChangeSubscription}
                    value="a"
                    name="radio-button-demo"
                    aria-label="A"
                  />
                  <CardContent style={{textAlign: 'center', padding: 40}}>
                    <Typography color="textSecondary" gutterBottom>
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                      A
                    </Typography>
                    <Typography color="textSecondary">
                      B
                    </Typography>
                    <Typography component="p">
                      C
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item>
                <Card>
                  <Radio
                    style={{position: 'absolute'}}
                    checked={this.state.selectedValue === 'b'}
                    onChange={this._handleChangeSubscription}
                    value="b"
                    name="radio-button-demo"
                    aria-label="B"
                  />
                  <CardContent style={{textAlign: 'center', padding: 40}}>
                    <Typography color="textSecondary" gutterBottom>
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                      A
                    </Typography>
                    <Typography color="textSecondary">
                      B
                    </Typography>
                    <Typography component="p">
                      C
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item>
                <Card>
                  <Radio
                    style={{position: 'absolute'}}
                    checked={this.state.selectedValue === 'c'}
                    onChange={this._handleChangeSubscription}
                    value="c"
                    name="radio-button-demo"
                    aria-label="C"
                  />
                  <CardContent style={{textAlign: 'center', padding: 40}}>
                    <Typography color="textSecondary" gutterBottom>
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                      A
                    </Typography>
                    <Typography color="textSecondary">
                      B
                    </Typography>
                    <Typography component="p">
                      C
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{borderRight: "1px solid black", padding: 100}}>
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
              <Button variant="contained" className={classes.button} style={{marginTop: 20}}>
                Register Account
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);