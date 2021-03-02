import React,{useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Dialog,  Avatar} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import useStyles from './styles';
import { Form } from '../Form/Form';
import { LOGOUT } from '../../constants/actionTypes';

export default function NavBar({open,currentPost, setCurrentPost, handleDialogClose, handleDialogOpen}) {
  const classes = useStyles()
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const handleLogout = ()=>{
    dispatch({type:LOGOUT})
    setUser(null)
    history.push('/auth')
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <IconButton 
          edge="start" 
          className={classes.menuButton} 
          color="inherit" 
          aria-label="menu">
          <MenuIcon  />
        </IconButton>
        <div className={classes.brandContainer}>
          <Typography component={Link} to="/" variant="h5" className={classes.heading}>
            Readit
          </Typography>
        </div>


        <Toolbar className={classes.toolbar}>
          {user?.result ? (
            <div className={classes.profile}>
              <Button color="inherit">
                <AddCircleOutlineIcon onClick={handleDialogOpen}/>
              </Button>
              <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl} />
              <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
              <Button variant='contained' className={classes.logout} onClick={handleLogout} color='secondary'>Logout</Button>
            </div>
          ):(
            <Button component={Link} to='/auth' color='secondary' variant='contained'>
              Log In
            </Button>
          )}
        </Toolbar>

        <Dialog maxWidth='xs'
          open={open} 
          onClose={handleDialogClose} 
          aria-labelledby="form-dialog-title">
          <Form 
          currentPost={currentPost} 
          setCurrentPost={setCurrentPost} 
          handleDialogClose={handleDialogClose} 
          handleDialogOpen={handleDialogOpen} />
        </Dialog>

      </AppBar>
    </div>
  );
}
