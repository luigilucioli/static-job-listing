// import { useState, useRef, useEffect } from 'react'
import { useStyles } from './style'

function Header({
  className,
}) {
  const { classes, cx } = useStyles()

  return (
    <div
      className={cx({
        [classes.root]: true,
        [className]: className,
        header: true,
      })}
    >
      <img className={classes.bgHeaderDesktop} src="./images/header/bg-header-desktop.svg" alt="bgHeaderDesktop" />
      <img className={classes.bgHeaderMobile} src="./images/header/bg-header-mobile.svg" alt="bgHeaderMobile" />
    </div>
  )
}


export default Header
