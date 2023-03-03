import { makeStyles } from '@/styles/makeStyle'

const style = () => ({
  container: {},
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backToHome: {
    margin: '3rem 0 0',
  },
})

export const useStyles = makeStyles({ name: 'Layout' })(style)
