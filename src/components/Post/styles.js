import {makeStyles } from '@material-ui/core/styles';
import { theme } from './../../theme';

export default makeStyles(theme =>({
    card:{
        maxWidth:"100%",
    },
    Like:{
      textTransform:'capitalize',
    },
    overlayLeft: {
        position: 'absolute',
        top: '10px',
        left: '10px',
        color: 'white',
      }, 
      overlayRight: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        color: 'white',
        padding:'0px',
      },
      menu:{
        margin:'0px',
        padding:'0px',
      },
      menuitem:{
        height:'40px',
      },
    media: {
      height: 200,
    },
    cardFooter:{
        display: "flex",
        padding:'0 16px 8px 16px',
        // margin: "0 10px",
        justifyContent: "space-between"
      },
    }
));