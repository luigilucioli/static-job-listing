import { makeStyles } from '../../styles/makeStyle'

const style = (theme) => ({
  root: {
    padding: '0px 11%',
    width: '100%',
    opacity: 0,
    transition: 'opacity 0.3s linear',
  },
  rootVisible: {
    opacity: 1,
  },
  wrapper: {
    padding: '20px 40px',
    borderRadius: 5,
    backgroundColor: theme.colors.white,
    boxShadow: `0 7px 15px -8px ${theme.getRgba(theme.colors.green, 0.5)}`,
    minHeight: 74,
    display: 'flex',
    justifyContent: 'space-between',
  },
  containerFilters: {
    display: 'flex',
  },
  filterButton: {
    position: 'relative',
    zIndex: 1,
    marginRight: 15,
    backgroundColor: theme.colors.bgGreen,
    borderRadius: 4,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 45,
    overflow: 'hidden',
    width: 'fit-content',
    height: 34,
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
    color: theme.colors.green,
    cursor: 'pointer',
    padding: 0,
    height: 'auto',
    '& span': {
      position: 'relative',
      zIndex: 1,
      display: 'block',
      fontSize: 15,
      '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: 1,
        left: 0,
        bottom: 1,
        width: '100%',
        height: 1,
        backgroundColor: 'currentColor',
        transition: `transform .6s ${theme.easings['power3.out']}`,
        transform: 'scaleX(1)',
        transformOrigin: '100% 0',
      },
      '@media (hover: hover)': {
        '&:hover': {
          '&:before': {
            transform: 'scaleX(0)',
            transformOrigin: '0 0',
          },
        },
      },
    },
  },
})

export const useStyles = makeStyles({ name: 'Filters' })(style)