import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Container, Row, Col } from 'react-grid-system';
import Results from './Results';
import SwipeableViews from 'react-swipeable-views';

class StageList extends Component {
  constructor()
  {
    super();
    this.state={
      status:false
    };
  }
  handleClick(){
    this.setState({
      status:true
    })
  }
  render() {
    return(
      <div>
      { this.state.status ? <Results /> :
        <div>
          <Container>
            <Card style={{'width':'50%','margin':'auto','marginTop':10,'backgroundColor':'#009688','color':'#FFF'}}>
              <Row>
                  <Col sm={6}>
                    <CardHeader>
                      Stages
                    </CardHeader>
                  </Col>
                  <Col sm={4} style={{'marginTop':15}}>
                      Status
                  </Col>
              </Row>
            </Card>
            <Card style={{'width':'50%','margin':'auto','marginTop':10}} onClick={this.handleClick.bind(this)}>
              <Row>
                  <Col sm={6}>
                    <CardHeader
                      title="gitClone"
                    />
                  </Col>
                  <Col sm={4} style={{'marginTop':15}}>
                   Completed
                  </Col>
                  <Col sm={2} style={{'marginTop':15}}>
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                        <path d="M0-.25h24v24H0z" fill="none"/>
                    </svg>
                  </Col>
              </Row>
            </Card>
            <Card style={{'width':'50%','margin':'auto','marginTop':10}}>
              <Row>
                  <Col sm={6}>
                    <CardHeader
                      title="Build"
                    />
                  </Col>
                  <Col sm={4} style={{'marginTop':15}}>
                    Completed
                  </Col>
                  <Col sm={2} style={{'marginTop':15}}>
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                        <path d="M0-.25h24v24H0z" fill="none"/>
                    </svg>
                  </Col>
              </Row>
            </Card>
            <Card style={{'width':'50%','margin':'auto','marginTop':10}}>
              <Row>
                  <Col sm={6}>
                    <CardHeader
                      title="mocha"
                    />
                  </Col>
                  <Col sm={4} style={{'marginTop':15}}>
                    Scheduled
                  </Col>
                  <Col sm={2} style={{'marginTop':15}}>
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                        <path d="M0-.25h24v24H0z" fill="none"/>
                    </svg>
                  </Col>
              </Row>
            </Card>
          </Container>
        </div>
      }
    </div>

    );

  }
}

export default StageList;