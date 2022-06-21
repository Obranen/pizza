import React from 'react'
import classes from './App.module.scss'
import {Grid, Row, Col} from 'react-flexbox-grid';

function App() {
  return (
    <Grid fluid>
      <Row>
        <Col xs={12} sm={3} md={6} lg={12}>
          <div className={classes.mainStyle}>
            Hello, world! 11111
          </div>
        </Col>
        <Col xs={12} sm={3} md={6} lg={12}>
          Hello, world!
        </Col>
        <Col xs={12} sm={3} md={6} lg={12}>
          Hello, world!
        </Col>
        <Col xs={12} sm={3} md={6} lg={12}>
          Hello, world!
        </Col>
      </Row>
    </Grid>
  );
}

export default App
