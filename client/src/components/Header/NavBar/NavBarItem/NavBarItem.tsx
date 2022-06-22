import React, {FC} from 'react'
import {Link} from 'react-router-dom';

interface INavBarItem {
  navValue: string
  navKey: string
}

const NavBarItem: FC<INavBarItem> = ({navValue, navKey}) => {
    return (
      <>
        <Link to={navValue}>{navKey}</Link>
      </>
    )
  }

export default NavBarItem