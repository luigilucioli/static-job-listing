import { useEffect, useState } from 'react'
import { useStyles } from './style'
import useFiltersStore from '@/store/filters'

function Filters({
  className,
}) {
  const { classes, cx } = useStyles()
  const [filtersVisible, setFiltersVisible] = useState(false)

  /*------------------------------
  Zustand Actions
  ------------------------------*/
  const filters = useFiltersStore((store) => store.filters)
  const removeFilters = useFiltersStore((store) => store.removeFilters)
  const removeAllFilters = useFiltersStore((store) => store.removeAllFilters)

  useEffect(() => {
    filters.length ? setFiltersVisible(true) : setFiltersVisible(false)
  }, [filters])

  return (
    <div
      className={cx({
        [classes.root]: true,
        [classes.rootVisible]: filtersVisible,
        [className]: className,
      })}
    >
        <div className={classes.containerFilters}>
          {filters.map((item, index) => (
            <div
              key={index}
              className={classes.filterButton}
            >
              <span>{item}</span>
              <button
                onClick={() => { removeFilters(item) }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                  <path d="m11.314 0 2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <button
          className={classes.clearFilters}
          onClick={removeAllFilters}
        >
          <span>Clear</span>
        </button>
    </div>
  )
}

export default Filters
