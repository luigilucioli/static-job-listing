import { makeStyles } from '../../styles/makeStyle'

const style = (theme) => ({
  root: {
    padding: '0px 11%',
  },
  wrapper: {
    padding: '20px 40px',
    borderRadius: 5,
    backgroundColor: theme.colors.white,
    boxShadow: `0 7px 15px -8px ${theme.getRgba(theme.colors.green, 0.5)}`,
  },
})

export const useStyles = makeStyles({ name: 'Filters' })(style)