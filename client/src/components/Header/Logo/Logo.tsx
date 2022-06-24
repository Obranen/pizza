import React from 'react'
import {Col} from 'react-flexbox-grid'
import classes from './Logo.module.scss'
import {Link} from 'react-router-dom';
import {typesRoutes} from '../../../pages/typesRoutesPages';

const Logo = () => {
  return (
    <Col sm={4}>
      <div className={classes.logo}>
        <Link to={typesRoutes.HOME}>
          <div className={classes.word}>
            <div className={classes.stripTop}></div>
            <span className={classes.letterP}>P</span>
            <span className={classes.letterI}>I</span>
            <span className={classes.letterZ1}>Z</span>
            <span className={classes.letterZ2}>Z</span>
            <span className={classes.letterA}>A</span>
            <div className={classes.stripBottom}></div>
          </div>
        </Link>
      </div>
    </Col>
  )
}

export default Logo