import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ListItem from '@/components/ListItem'
import useFiltersStore from '@/store/filters'
import { useStyles } from './style'

function ListGroup({
  className,
  items,
}) {
  const { classes, cx } = useStyles()
  const $root = useRef()
  const [filteredItems, setFilteredItems] = useState([])
  const [firstTime, setFirstTime] = useState(true)

  /*------------------------------
  Zustand Actions
  ------------------------------*/
  const filters = useFiltersStore((store) => store.filters)

  /*------------------------------
  Creation of a categories node within individual items
  ------------------------------*/
  useEffect(() => {
    items = items.map(item => {
      item.categories = []
      item.categories.push(item.role)
      item.categories.push(item.level)
      item.languages.forEach(language => {
        item.categories.push(language)
      })
      item.tools.forEach(tool => {
        item.categories.push(tool)
      })
      return item
    })
    setFilteredItems(items)
  }, [])

  /*------------------------------
  Filters change animation
  ------------------------------*/
  useEffect(() => {
    if (!firstTime) {
      gsap.to($root.current, {
        duration: 0.2,
        opacity: 0,
        onComplete: () => {
          if (filters.length) {
            let fitered = []
            items.map(item => {
              if (filters.every(elem => item.categories.includes(elem))) {
                fitered.push(item)
              }
            })
            setFilteredItems(fitered)
          } else {
            setFilteredItems(items)
          }
          gsap.to($root.current, {
            duration: 0.2,
            delay: 0.1,
            opacity: 1,
          })
        }
      })
    }
    setFirstTime(false)
  }, [filters])

  /*------------------------------
  Render
  ------------------------------*/
  return (
    <div
      ref={$root}
      className={cx({
        [classes.root]: true,
        [className]: className,
      })}
    >
      {filteredItems.map(item => (
        <ListItem
          key={item?.id}
          item={item}
        />
      ))}
    </div>
  )
}

export default ListGroup
