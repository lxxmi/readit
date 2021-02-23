
import { Typography, TextField, Paper, Button } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './styles'
import {createPost, updatePost} from '../../actions/posts'

export const Form = ({currentPost, setCurrentPost, handleDialogClose, handleDialogOpen}) => {
    const postIdToEdit = useSelector((state) => (currentPost ? state.posts.find((post) => post._id === currentPost) : null));
    const classes = useStyles()
    const dispatch = useDispatch()
    const [postBody, setPostBody] = useState({ creator:'', title:'', content:'', tags:'', attachedFile:''})

    useEffect(() => {
        if (postIdToEdit) setPostBody(postIdToEdit);
      }, [postIdToEdit]);

    const handleClear = ()=>{
        setPostBody({ creator:'', title:'', content:'', tags:'', attachedFile:''})        
        setCurrentPost('')
    }
    const handleSubmit = (e)=>{
        e.preventDefault()

        if(currentPost){
            dispatch(updatePost(currentPost, postBody));
            setCurrentPost('')
        }
        else{
            dispatch(createPost(postBody))
        }
        handleClear()
        handleDialogClose()
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentPost ? 'Edit' : "Create"} post </Typography>
                <TextField label="Title" required fullWidth variant="outlined" name="title" value={postBody.title} onChange={(e)=>setPostBody({...postBody, title:e.target.value})} type="text"  />
                <TextField label="Message" required fullWidth variant="outlined" name="content" value={postBody.content} onChange={(e)=>setPostBody({...postBody, content:e.target.value})} type="text" />
                <TextField label="Creator" required fullWidth variant="outlined" name="creator" value={postBody.creator} onChange={(e)=>setPostBody({...postBody, creator:e.target.value})} type="text" />
                <TextField label="Tags" required fullWidth variant="outlined" name="tags" value={postBody.tags} onChange={(e)=>setPostBody({...postBody, tags:e.target.value.split(',')})} type="text" />
                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone = { ({base64})  => setPostBody({...postBody, attachedFile: base64 })} />
                </div>
                <Button color="primary" className={classes.buttonSubmit} variant='contained' size='small' type='submit' fullWidth>
                    {currentPost ? 'Update' : "Create"}
                </Button>
                <Button color="secondary" className={classes.buttonSubmit} variant='contained' size='small' onClick={handleClear} fullWidth>
                    Clear
                </Button>
            </form>
        </Paper>
    )
}
