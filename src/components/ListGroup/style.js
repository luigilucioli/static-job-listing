import { makeStyles } from '../../styles/makeStyle'

const style = (theme) => ({
  root: {
    padding: '75px 11% 120px',
    backgroundColor: theme.colors.bgGreen,
    '& > *:not(:first-child)': {
      marginTop: 25,
      [theme.mq.md]: {
        marginTop: 40,
      },
    },
    [theme.mq.md]: {
      padding: '75px 25px 120px',
    },
  },
})

export const useStyles = makeStyles({ name: 'ListGroup' })(style)