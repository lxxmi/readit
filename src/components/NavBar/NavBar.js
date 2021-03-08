import React,{useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Dialog, Container, Avatar} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import useStyles from './styles';
import { Form } from '../Form/Form';
import { LOGOUT } from '../../constants/actionTypes';
import decode from 'jwt-decode';

export default function NavBar({open,currentPost, setCurrentPost, handleDialogClose, handleDialogOpen}) {
  const classes = useStyles()
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const token = user?.token;

    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp *1000 < new Date().getTime()) handleLogout()
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const handleLogout = ()=>{
    dispatch({type:LOGOUT})
    setUser(null)
    history.push('/auth')
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Container maxWidth='lg' className={classes.container}>
        <div className={classes.brandContainer}>
          <Typography component={Link} to="/" variant="h5" className={classes.heading}>
            Readit
          </Typography>
        </div>


        <Toolbar className={classes.toolbar}>
          {user?.result ? (
            <>
            <div className={classes.profile}>
              <Button color="inherit">
                <AddCircleOutlineIcon onClick={handleDialogOpen}/>
              </Button>
              <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
              <Button variant='contained' className={classes.logout} onClick={handleLogout} color='secondary'>Logout</Button>
            </div>
            <Avatar className={classes.purplesm} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <IconButton 
                edge="end" 
                className={classes.menuButton} 
                color="inherit" 
                aria-label="menu"
                aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                >
                <MoreIcon/>
              </IconButton>
            </>
          ):(
            <Button component={Link} to='/auth' color='secondary' variant='contained'>
              Log In
            </Button>
          )}
          <Menu
            id="vert-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><span onClick={handleDialogOpen} >Create Post</span></MenuItem>
            <MenuItem onClick={handleClose}><span onClick={handleLogout}>Logout</span></MenuItem>
          </Menu>
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

        </Container>
      </AppBar>
    </div>
  );
}
