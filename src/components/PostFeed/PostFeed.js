import React, {useEffect} from 'react'
import { Grow, Container} from '@material-ui/core';
import { Typography} from '@material-ui/core';
import {Grid, CircularProgress } from '@material-ui/core';
import useStyles  from './styles';
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'
import { getPosts } from '../../actions/posts';
import { Post } from '../Post/Post';

export const PostFeed = ({setCurrentPost, handleDialogOpen, handleDialogClose}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [])

  const posts = useSelector((state)=> state.posts)
  const classes = useStyles()
return (
    <Grow in>
      <Container maxWidth='md' className={classes.container} >
        <Typography variant="h4" className={classes.title} >Articles</Typography>
          {!posts.length ? <CircularProgress /> : (
            <Grid container spacing={2} alignItems="stretch">
            {posts.map(post => (
              <Grid item xs={12} sm={6} md={4} >
                <Post handleDialogOpen={handleDialogOpen} handleDialogClose={handleDialogClose} 
                key={post._id} 
                post={post} 
                setCurrentPost={setCurrentPost}/>
              </Grid>
              ))
            }
            </Grid>
          )}
      </Container>
    </Grow>
    )
}

{/* <Grid item sm={6} >
psdp
<Post
 key={post._id} 
 post={post} 
 setCurrentPost={setCurrentPost}/>
</Grid> */}
