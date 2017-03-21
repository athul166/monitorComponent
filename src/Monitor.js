import React, { Component } from 'react';``
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import JobsList from './JobsList'


class Monitor extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <JobsList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Monitor;
