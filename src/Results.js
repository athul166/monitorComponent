import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

class Results extends Component {
  render() {
    return (
      <div style={{'margin':'auto','width':'800'}}>
      <Tabs style>
      <Tab label="STDOUT" style={{'backgroundColor':'#009688'}}>
      <div>
        <p>1:5  error  'x' is assigned a value but never used  no-unused-vars</p>
        <p>2:5  error  'y' is defined but never used           no-unused-vars</p>
        <p>:heavy_multiplication_x:  2 problems (2 errors, 0 warnings)</p>
      </div>
    </Tab>
    <Tab label="STDERR" style={{'backgroundColor':'#009688'}}>
        <p>
          cannot find module eslint-plugin-node
        </p>
   </Tab>
   <Tab label="EXITCODE" style={{'backgroundColor':'#009688'}}>
      <p>
      0
      </p>
   </Tab>
    </Tabs>
    </div>
    );
  }
}

export default Results;
