import React from 'react'
import {Col, Row} from 'react-flexbox-grid';
import classes from './NavBar.module.scss'
import NavBarItem from './NavBarItem/NavBarItem';
import {typesRoutes} from '../../../pages/typesRoutesPages';

const NavBar = () => {
    const nav = {
      'Пицца': typesRoutes.PIZZA,
      'Бургеры': typesRoutes.BURGERS,
      'Сеты': typesRoutes.SETS,
      'Напитки': typesRoutes.DRINKS
    }

  return (
      <Row>
        <Col smOffset={4} sm={4} className={classes.navBar}>
          {Object.keys(nav).map((navValue, index) => (
            <NavBarItem
              key={index}
              // @ts-ignore
              navValue={nav[navValue]}
              navKey={navValue}
            />
          ))}
        </Col>
      </Row>
    )
  }

export default NavBar