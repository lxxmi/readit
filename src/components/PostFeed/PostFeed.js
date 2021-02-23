import React from 'react'
import {Grid, CircularProgress } from '@material-ui/core';
 import useStyles  from './styles';
import { useSelector } from 'react-redux'
import { Post } from '../Post/Post';

export const PostFeed = ({setCurrentPost, handleDialogOpen, handleDialogClose}) => {
const posts = useSelector((state)=> state.posts)
const classes = useStyles()
return (
      !posts.length ? <CircularProgress /> : (
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
        </Grid>)
    )
}

{/* <Grid item sm={6} >
psdp
<Post
 key={post._id} 
 post={post} 
 setCurrentPost={setCurrentPost}/>
</Grid> */}
