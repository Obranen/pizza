import React, {FC} from 'react'
import {Col, Row} from 'react-flexbox-grid';
import classes from './NavBar.module.scss'
import NavBarItem from './NavBarItem/NavBarItem';
import {typesRoutes} from '../../../pages/typesRoutesPages';

interface INavBar {
}

const NavBar: FC<INavBar> =
  ({}) => {
    const nav = [
      {'Пицца': typesRoutes.PIZZA},
      {'Бургеры': typesRoutes.BURGERS},
      {'Сеты': typesRoutes.SETS},
      {'Напитки': typesRoutes.DRINKS},
    ]

    return (
      <Row>
        <Col sm={12} className={classes.navBar}>
          {nav.map((itemNav, index) =>
            <NavBarItem
              key={index}
              itemNav={itemNav}
            />
          )}
        </Col>
      </Row>
    )
  }

export default NavBar