import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { useStyles }from './style'

function FakeLoader() {
  const { cx, classes } = useStyles()
  const $root = useRef()
  const $progress = useRef()
  const $progressThumb = useRef()
  const [isLoaderExited, setLoaderExited] = useState(false)

  /*------------------------------
  Animate FakeLoader
  ------------------------------*/
  useEffect(() => {
    animationLoader()
  }, [])

  /*------------------------------
  FakeLoader animation
  ------------------------------*/
  const animationLoader = () => {
    gsap.timeline({ onComplete: setLoaderExited(true) })
      .to($progressThumb.current, ({
        duration: 1,
        delay: 0.3,
        scaleX: 1,
      }), 0.2)
      .to($progress.current, ({
        autoAlpha: 0,
        duration: 0.7,
      }))
      .to($root.current, ({
        autoAlpha: 0,
        duration: 0.3,
      }), '>-0.5')
  }

  /*------------------------------
  Render
  ------------------------------*/
  return (
    <div
      className={cx({
        [classes.root]: true,
        [classes.hide]: isLoaderExited,
      })}
      ref={$root}
    >
      <div
        ref={$progress}
        className={classes.progressContainer}
      >
        <div className={classes.progressBackdrop}>
          <div ref={$progressThumb} className={classes.progressThumb} />
        </div>
      </div>
    </div>
  )
}

export default FakeLoader
