import { keyframes } from 'tss-react'
import { makeStyles } from '@/styles/makeStyle'

const style = (theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 3,
    background: theme.colors.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hide: {
    pointerEvents: 'none',
  },
  progressContainer: {
    width: 250,
    height: 5,
    borderRadius: 3,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    animation: `${keyframes`
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    `} 0.5s ease-in-out`,
    [theme.mq.md]: {
      width: 200,
    },
  },
  progressBackdrop: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: theme.getRgba(theme.colors.green, 0.3),
  },
  progressThumb: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    transformOrigin: '0 0',
    transform: 'scaleX(0)',
    backgroundColor: theme.colors.green,
  },
})

export const useStyles = makeStyles({ name: 'FakeLoader' })(style)
