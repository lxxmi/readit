import {makeStyles } from '@material-ui/core/styles';

 export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin:0,
    },
    menuButton: {
        display:'none',
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        display:'block',
      },
    },
    title: {
      flexGrow: 1,
    },
  }));
  