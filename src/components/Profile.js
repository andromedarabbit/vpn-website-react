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
} from '@material-ui/core';
import TopBar from '../components/TopBar';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
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

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TopBar />
        <Grid container justify="center" style={{marginTop: 100}}>
          <Grid item>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.root}>
              <Tabs
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