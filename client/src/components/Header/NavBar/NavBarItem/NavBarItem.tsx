import React, {FC} from 'react'
import {Link} from 'react-router-dom';

interface INavBarItem {
  itemNav: any
}

const NavBarItem: FC<INavBarItem> =
  ({itemNav}) => {
    const v = Object.values(itemNav)
    const k = Object.keys(itemNav)
    console.log(k[0], 'Object.keys(itemNav)')
    console.log(v[0], 'Object.values(itemNav)')

    return (
      <>
        {// @ts-ignore
          <Link to={v[0]}>{k[0]}</Link>}
        {/*)}*/}
      </>
    )
  }

export default NavBarItem