import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:0,
  },
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:'30px',
  },
  heading: {
    // color: 'rgba(0,183,255, 1)',
    color:'white',
    textDecoration: 'none',
    flexGrow: 1,
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    flexGrow:1,
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  menuButton: {
    display:'none',
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    display:'block',
  },
},
}));

// import {makeStyles } from '@material-ui/core/styles';

//  export const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//       margin:0,
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }));
