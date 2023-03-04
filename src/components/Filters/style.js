import { makeStyles } from '../../styles/makeStyle'

const style = (theme) => ({
  root: {
    width: '100%',
    opacity: 0,
    padding: '10px 40px',
    borderRadius: 5,
    backgroundColor: theme.colors.white,
    boxShadow: `0 7px 30px -8px ${theme.getRgba(theme.colors.green, 0.5)}`,
    minHeight: 74,
    display: 'flex',
    justifyContent: 'space-between',
    transition: 'opacity 0.1s linear',
    [theme.mq.md]: {
      minHeight: 0,
      height: 0,
      padding: '10px 20px',
    },
  },
  rootVisible: {
    opacity: 1,
    [theme.mq.md]: {
      height: 'auto',
    },
  },
  containerFilters: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  filterButton: {
    position: 'relative',
    zIndex: 1,
    margin: 10,
    marginRight: 15,
    marginLeft: 0,
    backgroundColor: theme.colors.bgGreen,
    borderRadius: 4,
    padding: '10px 40px 7px 10px',
    overflow: 'hidden',
    width: 'fit-content',
    height: 32,
    display: 'flex',
    alignItems: 'center',
    '& span': {
      display: 'inline-block',
      color: theme.colors.green,
      fontWeight: 500,
      fontSize: 15,
      cursor: 'default',
    },
    '& button': {
      display: 'block',
      padding: 0,
      position: 'absolute',
      zIndex: 2,
      top: 0,
      right: 0,
      height: '100%',
      width: 32,
      border: 'none',
      backgroundColor: theme.colors.green,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s linear',
      cursor: 'pointer',
      '& svg': {
        display: 'block',
        fill: theme.colors.white,
        transition: 'all 0.2s linear',
      },
      '@media (hover: hover)': {
        '&:hover': {
          backgroundColor: theme.colors.darkGreen,
          '& svg': {
            fill: 'white',
          },
        },
      },
    },
  },
  clearFilters: {
    display: 'block',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    height: 'auto',
    margin: 10,
    marginRight: 0,
    '& span': {
      position: 'relative',
      zIndex: 1,
      display: 'block',
      color: theme.colors.grey,
      fontSize: 15,
      transition: `color .6s ${theme.easings['power3.out']}`,
      '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: 1,
        left: 0,
        bottom: 1,
        width: '100%',
        height: 1,
        backgroundColor: theme.colors.green,
        transition: `transform .6s ${theme.easings['power3.out']}`,
        transform: 'scaleX(0)',
        transformOrigin: '100% 0',
      },
      '@media (hover: hover)': {
        '&:hover': {
          color: theme.colors.green,
          '&:before': {
            transform: 'scaleX(1)',
            transformOrigin: '0 0',
          },
        },
      },
    },
  },
})

export const useStyles = makeStyles({ name: 'Filters' })(style)