import { useState, useEffect } from 'react'
import useFiltersStore from '@/store/filters'
import { useStyles } from './style'

function ListItem({
  className,
  item,
}) {
  const { classes, cx } = useStyles()
  const [categories, setCategories] = useState([])

  /*------------------------------
  Zustand Actions
  ------------------------------*/
  const filters = useFiltersStore((store) => store.filters)
  const addFilters = useFiltersStore((store) => store.addFilters)

  /*------------------------------
  Set categories state
  ------------------------------*/
  useEffect(() => {
    setCategories(current => [...current, item.role])
    setCategories(current => [...current, item.level])
    item.languages.forEach(i => setCategories(current => [...current, i]))
    item.tools.forEach(i => setCategories(current => [...current, i]))
  }, [])


  /*------------------------------
  Render
  ------------------------------*/
  return (
    <div
      className={cx({
        [classes.root]: true,
        [classes.rootFeatured]: item.featured,
        [className]: className,
        list_item: true,
      })}
    >
      <img className={classes.icon} src={item.logo} alt={item.company} />
      <div className={classes.containerInfo}>
        <div className={classes.containerCompany}>
          <h3>{item.company}</h3>
          {item.new ? (
            <span className={classes.new}>New!</span>
          ) : null}
          {item.featured ? (
            <span className={classes.featured}>Featured</span>
          ) : null}
        </div>
        <h2 className={classes.position}>{item.position}</h2>
        <div className={classes.containerDetails}>
          <p>{item.postedAt}</p>
          <p>{item.contract}</p>
          <p>{item.location}</p>
        </div>
      </div>
      <div className={classes.containerCategory}>
      {categories.map((item, index) => (
          <button
            key={index}
            className={cx({
              [classes.category]: true,
              [classes.pointerEventsNone]: filters.includes(item)
            })}
            onClick={() => addFilters(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ListItem
