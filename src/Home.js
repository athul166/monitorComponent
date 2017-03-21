import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <p>
        <Link to='/address'>  Home </Link>
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default Home;
