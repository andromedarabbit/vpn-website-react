import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  Grid,
  Radio,
  TextField,
  Typography,
} from '@material-ui/core';
import TopBar from '../components/TopBar';

const tiers = [
  {
    title: '1 Month',
    price_monthly: '$5.0 / mo',
    price_total: '$5.0',
    device: '5 Devices',
  },
  {
    title: '3 Month',
    price_monthly: '$4.0 / mo',
    price_total: '$12.0',
    device: '5 Devices',
  },
  {
    title: '1 Year',
    price_monthly: '$3.0 / mo',
    price_total: '$36.0',
    device: '5 Devices',
  },
];

const styles = (theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    paddingTop: 60,
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
    alignItems: 'center',
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
      selectedValue: '1 Month',
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
      <React.Fragment>
        <TopBar />
        <main className={classes.layout}>
          <Grid justify="center" container>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={32}>
                {
                  tiers.map((tier, index) => (
                    <Grid item key={index}>
                      <Card>
                        <Radio
                          style={{ position: 'absolute' }}
                          checked={this.state.selectedValue === tier.title}
                          onChange={this._handleChangeSubscription}
                          value={tier.title}
                          name="radio-button-price"
                          aria-label={tier.title}
                        />
                        <CardHeader
                          style={{ paddingTop: 40 }}
                          title={tier.title}
                          titleTypographyProps={{ align: 'center' }}
                        />
                        <CardContent style={{textAlign: 'center', padding: '10px 60px'}}>
                          <Typography color="textSecondary" gutterBottom>
                            {tier.price_monthly}
                          </Typography>
                          <Typography variant="h6">
                            {tier.price_total}
                          </Typography>
                          <Typography color="textSecondary">
                            {tier.device}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ padding: 50 }}>
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
        </main>
      </React.Fragment>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);