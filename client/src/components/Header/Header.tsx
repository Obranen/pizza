import React from 'react'
import NavBar from './NavBar/NavBar';
import {Col, Grid, Row} from 'react-flexbox-grid';
import classes from './Header.module.scss'
import Contacts from './Сontacts/Contacts';
import Logo from './Logo/Logo';
import Languages from './Languages/Languages';
import Login from './Login/Login';
import Cart from './Cart/Cart';

const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.header}>
        <Grid fluid>
          <Row>
            <Contacts/>
            <Logo/>
            <Col sm={4}>
              <div className={classes.rowRight}>
                <Languages/>
                <Login/>
                <Cart/>
              </div>
            </Col>
          </Row>
          <NavBar/>
        </Grid>
      </div>
    </div>
  )
}

export default Header