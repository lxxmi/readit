import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Dialog, DialogTitle, DialogContent, DialogActions} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useStyles } from './styles';
import { Form } from '../Form/Form';

export default function NavBar({open,currentPost, setCurrentPost, handleDialogClose, handleDialogOpen}) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
          edge="start" 
          className={classes.menuButton} 
          color="inherit" 
          aria-label="menu">
            <MenuIcon  />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Memories
          </Typography>

          <Button color="inherit">
            <AddCircleOutlineIcon onClick={handleDialogOpen}/>
          </Button>

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

        </Toolbar>
      </AppBar>
    </div>
  );
}
