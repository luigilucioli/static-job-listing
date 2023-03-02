// import { useState, useRef, useEffect } from 'react'
import { useStyles } from './style'
import ListItem from '@/components/ListItem'

function ListGroup({
  className,
  data,
}) {
  const { classes, cx } = useStyles()

  return (
    <div
      className={cx({
        [classes.root]: true,
        [className]: className,
      })}
    >
      {data.map(item => (
        <ListItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}


export default ListGroup
