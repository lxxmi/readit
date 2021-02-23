import React from 'react'
import moment from 'moment';
import {useDispatch} from 'react-redux'
import {deletePost} from '../../actions/posts'
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import useStyles from './styles';
import { Card, CardMedia, CardContent,CardActions, CardActionArea, Typography, Box } from '@material-ui/core';

export const Post = ({post, setCurrentPost, handleDialogOpen}) => {
    const {attachedFile, title, creator, content, likes, tags, createdAt, _id} = post
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleDelete = ()=>{
        dispatch(deletePost(_id))
    }
    const handleEdit = ()=>{
        setCurrentPost(_id)
        handleDialogOpen()
    }

    return (
            <Card className={classes.card} >
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={attachedFile}
                title={title}
                />
                <span className={classes.overlayLeft} style={{display:'inline-block'}}>
                </span>
                <Button size="small" margin="0" className={classes.overlayRight}>
                    <EditOutlinedIcon onClick={handleEdit} fontSize="default" />
                </Button>
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="h2">
                    {tags.map((tag) => `#${tag} `)}
                </Typography>
                    <Typography gutterBottom variant="h6" >
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions ml={2} className={classes.cardFooter}>
                <Box >
                    <Typography variant="body1" >{creator}</Typography>
                    <Typography variant="subtitle2" >{moment(createdAt).format('MMM Do YY')}</Typography>
                </Box>
                <Button size="small" color="primary">
                    <ThumbUpIcon fontSize="small" />
                </Button>
                <Button size="small" color='secondary'>
                    <DeleteIcon onClick={handleDelete} fontSize="small" />
                </Button>
            </CardActions>
            </Card>
        )
}



