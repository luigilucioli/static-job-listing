// import { useState, useRef, useEffect } from 'react'
import { useStyles } from './style'

function ListItem({
  className,
  label,
}) {
  const { classes, cx } = useStyles()

  return (
    <div
      className={cx({
        [classes.root]: true,
        [className]: className,
        list_item: true,
      })}
    >
      {label}
    </div>
  )
}


export default ListItem
