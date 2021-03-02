import React from 'react'
import { TextField, Grid, InputAdornment, IconButton} from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons'
export const Input = ({name, type, half, label, handleChange, handleShowPassword,autoFocus}) => {
    return (
        <Grid item xs={12} sm={half ? 6 :12 }>
            <TextField
             name={name}
             type={type}
             label={label}
             onChange={handleChange}
             variant='outlined'
             required
             fullWidth
             autoFocus={autoFocus}
             InputProps={name === 'password' ? {
                 endAdornment:(
                     <InputAdornment position='end'>
                         <IconButton onClick={handleShowPassword}>
                             {type === 'password' ? <Visibility/>:<VisibilityOff/>}
                         </IconButton>
                     </InputAdornment>
                 )
             }:null}
             />
        </Grid>
    )
}

