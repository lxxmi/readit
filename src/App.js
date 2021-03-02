import React, { useState} from 'react'
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { PostFeed } from './components/PostFeed/PostFeed';
import  NavBar  from './components/NavBar/NavBar';
import  {Auth}  from './components/Auth/Auth';
import useStyles from './styles'

function App() {
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
      <BrowserRouter>
        <div className="App">
          <NavBar
          open={open} 
          handleDialogOpen={handleDialogOpen} 
          handleDialogClose={handleDialogClose} 
          currentPost={currentPost}
          setCurrentPost={setCurrentPost}/>

          <Switch>
            <Route path='/' exact>
              <PostFeed textAlign='center'
                handleDialogOpen={handleDialogOpen}  
                handleDialogClose={handleDialogClose} 
                setCurrentPost={setCurrentPost}/>
            </Route>
            <Route path='/auth' exact component={Auth} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
