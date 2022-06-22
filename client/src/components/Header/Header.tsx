import React, {FC} from 'react'
import NavBar from './NavBar/NavBar';
import {Col, Grid, Row} from 'react-flexbox-grid';
import classes from './Header.module.scss'
import Contacts from './Сontacts/Contacts';
import Logo from './Logo/Logo';
import Languages from './Languages/Languages';
import Login from './Login/Login';
import Cart from './Cart/Cart';

interface IHeader {
}

const Header: FC<IHeader> =
  ({}) => {
    return (
      <div className={classes.header}>
        <Grid fluid>
          <Row>
            <Contacts/>
            <Logo/>
            <Col sm={4}>
              <Row className={classes.rowR}>
                <Languages/>
                <Login/>
                <Cart/>
              </Row>
            </Col>
          </Row>
          <NavBar/>
        </Grid>
      </div>
    )
  }

export default Header