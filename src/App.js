import React, {useEffect, useState} from 'react'
import './App.css';
import { getPosts } from './actions/posts';
import {useDispatch} from 'react-redux'
import { PostFeed } from './components/PostFeed/PostFeed';
import  NavBar  from './components/NavBar/NavBar';
import { Grow, Container} from '@material-ui/core';
import { Typography} from '@material-ui/core';
import {theme} from './theme'
import { ThemeProvider } from "@material-ui/styles";
import useStyles from './styles'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  const [open, setOpen] = React.useState(false);
  const [currentPost, setCurrentPost] = useState('')

  const handleDialogOpen = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
    setCurrentPost('')
  };


  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar
         open={open} 
         handleDialogOpen={handleDialogOpen} 
         handleDialogClose={handleDialogClose} 
         currentPost={currentPost}
         setCurrentPost={setCurrentPost}/>
          <Container maxWidth='lg' className={classes.container} >
            <Typography variant="h4" className={classes.title} >Articles</Typography>
            <Grow in>
                  <PostFeed textAlign='center'
                   handleDialogOpen={handleDialogOpen} 
                   handleDialogClose={handleDialogClose} 
                   setCurrentPost={setCurrentPost}/>
            </Grow>
          </Container>      
      </div>
    </ThemeProvider>

  );
}

export default App;
