import { createMakeStyles, createWithStyles } from 'tss-react'
import theme from './style'

function useTheme() {
  return theme
}

// export const {
//   makeStyles,
//   useStyles, // <- This useStyles is like the useStyles you get when you
//   //   call makeStyles but it doesn't return a classes object.
// } = createMakeAndWithStyles({ useTheme })

export const { makeStyles, useStyles } = createMakeStyles({ useTheme })

export const { withStyles } = createWithStyles({ useTheme })

export { useTheme }
