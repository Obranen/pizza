import React, {FC} from 'react'
import {Col} from 'react-flexbox-grid'
import classes from './Logo.module.scss'

interface ILogo {
}

const Logo: FC<ILogo> =
  ({}) => {
    return (
      <Col sm={4}>
        <div className={classes.logo}>
          Logo
        </div>
      </Col>
    )
  }

export default Logo