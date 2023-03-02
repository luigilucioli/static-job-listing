import { makeStyles } from '../../styles/makeStyle'

const style = () => ({
  root: {
    paddingTop: 75,
    paddingLeft: '11%',
    paddingRight: '11%',
    '& > *:not(:first-child)': {
      marginTop:25,
    },
  },
})

export const useStyles = makeStyles({ name: 'ListGroup' })(style)