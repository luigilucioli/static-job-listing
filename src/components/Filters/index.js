// import { useState, useRef, useEffect } from 'react'
import { useStyles } from './style'
import useFiltersStore from '@/store/filters'

function Filters({
  className,
}) {
  const { classes, cx } = useStyles()

  /*------------------------------
  Zustand Actions
  ------------------------------*/
  const filters = useFiltersStore((store) => store.filters)
  const removeFilters = useFiltersStore((store) => store.removeFilters)

  return (
    <div
      className={cx({
        [classes.root]: true,
        [className]: className,
      })}
    >
      <div className={classes.wrapper}>
        <div className={classes.containerFilters}>
          {filters.map((item, index) => (
            <button
              key={index}
              onClick={() => { removeFilters(item) }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Filters
