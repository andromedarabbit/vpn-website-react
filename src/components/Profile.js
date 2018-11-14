import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Grid,
  TextField,
  Paper,
  Tabs,
  Tab,
  Typography,
} from '@material-ui/core';
import TopBar from '../components/TopBar';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ border: '1px solid lightgray', padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const styles = (theme) => ({
  root: {
    flexGrow: 1,
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

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  _handleChangeEmail = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  _tabEditProfile = () => {
    const { classes } = this.props;
    const { email } = this.props;

    return (
      <form className={classes.containerForm} noValidate autoComplete="off">
        <TextField
          id="signup-email"
          label="E-mail"
          className={classes.textField}
          value={email}
          onChange={this._handleChangeEmail('email')}
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
          Apply
        </Button>
      </form>
    )
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <TopBar />
        <Grid container justify="center" style={{marginTop: 100}}>
          <Grid item>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.root}>
              <Tabs
                fullWidth
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Edit Profile" />
                <Tab label="Status" />
                <Tab label="Subscription" />
              </Tabs>
            </Paper>
            {value === 0 && <TabContainer>{this._tabEditProfile()}</TabContainer>}
            {value === 1 && <TabContainer>Item Two</TabContainer>}
            {value === 2 && <TabContainer>Item Three</TabContainer>}
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);