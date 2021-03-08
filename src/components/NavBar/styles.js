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
  },
  heading: {
    // color: 'rgba(0,183,255, 1)',
    color:'white',
    textDecoration: 'none',
    flexGrow: 1,
  },
  container:{
    display:'flex',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    paddingRight:'0px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      display:'none',
    },
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
  purplesm: {
    display:'none',
  [theme.breakpoints.down('sm')]: {
    display:'flex',
    alignItems:'center',
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
},
  menuButton: {
    display:'none',
    margin:'0px',
  [theme.breakpoints.down('sm')]: {
    display:'block',
  },
},
}));

