import { makeStyles } from '../../styles/makeStyle'

const style = (theme) => ({
  root: {
    backgroundColor: theme.colors.green,
  },
  bgHeaderDesktop: {
    width: '100%',
    [theme.mq.sm]: {
      display: 'none',
    },
  },
  bgHeaderMobile: {
    display: 'none',
    width: '100%',
    [theme.mq.sm]: {
      display: 'block',
    },
  },
})

export const useStyles = makeStyles({ name: 'Header' })(style)