import React, {FC} from 'react'
import {Link} from 'react-router-dom';
import classes from './NavBarItem.module.scss'

interface INavBarItem {
  navValue: string
  navKey: string
}

const NavBarItem: FC<INavBarItem> = ({navValue, navKey}) => {
    return (
      <span className={classes.navBarItem}>
        <Link to={navValue}>{navKey}</Link>
      </span>
    )
  }

export default NavBarItem