// import { useState, useRef, useEffect } from 'react'
import { useStyles } from './style'

function ListItem({
  className,
  item,
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
      {item.company}
    </div>
  )
}


export default ListItem