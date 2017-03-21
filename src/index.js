import React from 'react';
import ReactDOM from 'react-dom';
import Monitor from './Monitor';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Monitor/>,
   document.getElementById('root')
);

// import React from 'react'
// import ReactDOM from 'react-dom'
// import Home from './Home'
// import React, { Component } from 'react';
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
//
// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path='/' component={Home} />
//     <Route path='/address' component={Address} />
//   </Router>
//   , document.getElementById('root'))
// );
