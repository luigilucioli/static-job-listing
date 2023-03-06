import theme from '@/styles/style'

export default {
  html: {
    padding: 0,
    margin: 0,
    lineHeight: 1.3,
    fontSize: 15,
    fontWeight: 700,
  },

  body: {
    padding: 0,
    margin: 0,
    lineHeight: 1.3,
    fontSize: 15,
    fontWeight: 700,
    overflowY: 'scroll',
    '& main': {
      minHeight: '100vh',
      backgroundColor: '#f0fafb',
    },
    '& *': {
      fontFamily: `${theme.fonts.leagueSpartan}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
      boxSizing: 'border-box',
    },
    '& a': {
      cursor: 'pointer',
      textDecoration: 'none',
    },
    '& button': {
      cursor: 'pointer',
    },
    '& img': {
      maxWidth: '100%',
      display: 'block',
    },
    '& h1, & h2, & h3, & h4, & p': {
      margin: 0,
      padding: 0,
    },
  },
}
