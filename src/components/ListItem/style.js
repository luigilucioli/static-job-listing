import { makeStyles } from '../../styles/makeStyle'

const style = (theme) => ({
  root: {
    padding: '30px 40px',
    borderRadius: 5,
    backgroundColor: theme.colors.white,
    boxShadow: `0 7px 30px -8px ${theme.getRgba(theme.colors.green, 0.5)}`,
    display: 'flex',
    [theme.mq.md]: {
      display: 'block',
      position: 'relative',
      zIndex: 1,
      padding: '30px 25px 25px 25px',
    },
  },
  rootFeatured: {
    borderLeft: `5px solid ${theme.colors.green}`,
  },
  icon: {
    display: 'block',
    height: 90,
    width: 90,
    flexShrink: 0,
    [theme.mq.md]: {
      position: 'absolute',
      top: 0,
      left: 25,
      height: 50,
      width: 50,
      transform: 'translateY(-50%)',
    },
  },
  containerInfo: {
    marginLeft: 25,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexShrink: 0,
    [theme.mq.md]: {
      marginLeft: 0,
      paddingBottom: 15,
      borderBottom: `1px solid ${theme.getRgba(theme.colors.grey, 0.5)}`
    },
  },
  containerCompany: {
    display: 'flex',
    '& h3': {
      fontSize: 18,
      color: theme.colors.green,
      fontWeight: 500,
      [theme.mq.md]: {
        fontSize: 15,
      },
    },
  },
  new: {
    fontWeight: 700,
    display: 'block',
    color: theme.colors.white,
    backgroundColor: theme.colors.green,
    fontSize: 13,
    textTransform: 'uppercase',
    padding: '4px 8px 0px',
    lineHeight: 1.5,
    borderRadius: 20,
    marginLeft: 15,
  },
  featured: {
    fontWeight: 700,
    display: 'block',
    color: theme.colors.white,
    backgroundColor: theme.colors.darkGreen,
    fontSize: 13,
    textTransform: 'uppercase',
    padding: '4px 8px 0px',
    lineHeight: 1.5,
    borderRadius: 20,
    marginLeft: 10,
  },
  position: {
    fontSize: 21,
    color: theme.colors.darkGreen,
    paddingTop: 2,
    transition: 'all 0.2s linear',
    cursor: 'pointer',
    '@media (hover: hover)': {
      '&:hover': {
        color: theme.colors.green,
      },
    },
    [theme.mq.md]: {
      paddingTop: 0,
      fontSize: 16,
      marginTop: 10,
    },
  },
  containerDetails: {
    '& p': {
      fontWeight: 500,
      color: theme.colors.grey,
      fontSize: 16,
      display: 'inline-block',
      position: 'relative',
      zIndex: 1,
      '&:not(:first-child)': {
        marginLeft: 36,
        '&:before': {
          content: '""',
          display: 'block',
          backgroundColor: theme.colors.grey,
          width: 4,
          height: 4,
          borderRadius: '50%',
          position: 'absolute',
          top: '50%',
          left: -18,
          transform: 'translate(-50%, -50%)',
        },
      },
      [theme.mq.md]: {
        fontSize: 15,
        marginTop: 10,
        '&:not(:first-child)': {
          marginLeft: 25,
          '&:before': {
            left: -12,
          },
        },
      },
    },
  },
  containerCategory: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    marginLeft: 30,
    [theme.mq.md]: {
      justifyContent: 'flex-start',
      marginLeft: 0,
    },
  },
  category: {
    fontWeight: 500,
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 15,
    backgroundColor: theme.colors.bgGreen,
    border: 'none',
    borderRadius: 4,
    color: theme.colors.green,
    padding: '10px 10px 7px',
    cursor: 'pointer',
    transition: 'all 0.2s linear',
    '@media (hover: hover)': {
      '&:hover': {
        backgroundColor: theme.colors.green,
        color: theme.colors.white,
      },
    },
    [theme.mq.md]: {
      marginLeft: 0,
      marginRight: 15,
      marginTop: 15,
      marginBottom: 0,
    },
  },
})

export const useStyles = makeStyles({ name: 'ListItem' })(style)