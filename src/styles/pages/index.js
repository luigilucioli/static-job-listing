export default (theme) => ({
  wrapper: {
    backgroundColor: theme.colors.bgGreen,
  },
  content: {
    padding: '0px 11% 120px',
    position: 'relative',
    zIndex: 1,
    top: -37,
    [theme.mq.md]: {
      padding: '0px 25px 120px',
    },
  },
  listGroup: {
    paddingTop: 40,
    [theme.mq.md]: {
      paddingTop: 60,
    },
  },
})
