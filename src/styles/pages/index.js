export default (theme) => ({
  content: {
    padding: '0px 11% 83px',
    position: 'relative',
    zIndex: 1,
    top: -37,
    [theme.mq.md]: {
      padding: '0px 25px 113px',
    },
  },
  listGroup: {
    paddingTop: 40,
    [theme.mq.md]: {
      paddingTop: 60,
    },
  },
})
