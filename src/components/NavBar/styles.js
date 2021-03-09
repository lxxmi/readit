import { makeStyles } from '@material-ui/core/styles';
import { deepPurple, black } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:0,
  },
  appBar: {
    color: deepPurple[500],
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'white',
    color:'black',
  },
  heading: {
   textDecoration: 'none',
    flexGrow: 1,
    borderRadius:'5px',
    color:'#551a8b',
    fontWeight:'600',
    padding:'5px',
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
logout:{
  backgroundColor:'#3b49df',
  fontSize:'16px',
}
}));

