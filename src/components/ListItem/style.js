import { makeStyles } from '../../styles/makeStyle'

const style = () => ({
  root: {
    backgroundColor: 'red',
  },
})

export const useStyles = makeStyles({ name: 'ListItem' })(style)