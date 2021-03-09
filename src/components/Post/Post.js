import React, {useState} from 'react'
import moment from 'moment';
import {useDispatch} from 'react-redux'
import {deletePost, likePost} from '../../actions/posts'
import Button from '@material-ui/core/Button';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import useStyles from './styles';
import { Card, CardMedia, CardContent,CardActions, CardActionArea, Typography, Box } from '@material-ui/core';

export const Post = ({post, setCurrentPost, handleDialogOpen}) => {
    const {attachedFile, title, name,creator, content, likes, tags, createdAt, _id} = post
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'));
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    const handleDelete = ()=>{
        dispatch(deletePost(_id))
    }
    const handleLike = ()=>{
        dispatch(likePost(_id))
    }
    const handleEdit = ()=>{
        setCurrentPost(_id)
        handleDialogOpen()
    }

    const Likes = () => {
        if (likes.length > 0) {
          return likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
              <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
        return <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;Like</>;
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
                {(creator === user?.result?.googleId || creator === user?.result?._id) &&(
                    <Button size="small" margin="0" className={classes.overlayRight}>
                        <MoreIcon  aria-controls="fade-menu" aria-haspopup="true" onClick={handleMenuClick} fontSize="default" />
                        <Menu className={classes.menu}
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleMenuClose}
                        TransitionComponent={Fade}>
                            <MenuItem className={classes.menuitem} onClick={handleMenuClose}>
                                <span onClick={handleEdit}>Edit</span>
                            </MenuItem>
                            <MenuItem className={classes.menuitem} onClick={handleMenuClose}>
                                <span onClick={handleDelete}>Delete</span>
                            </MenuItem>
                        </Menu>
                    </Button>
                )}

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
                    <Typography variant="body1" >{name}</Typography>
                    <Typography variant="subtitle2" >{moment(createdAt).format('MMM Do YY')}</Typography>
                </Box>
                <Button className={classes.Like} size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
                    <Likes />
                </Button>
            </CardActions>
            </Card>
        )
}



