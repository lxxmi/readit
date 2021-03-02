import { Paper, Grid, Button,Avatar, Container, Typography } from '@material-ui/core'
import GoogleLogin from 'react-google-login'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { Input } from '../Input'
import Icon from './Icon'
import useStyles from './styles'
import { AUTH } from '../../constants/actionTypes'

export const Auth = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false)
    const [isRegister, setIsRegister] = useState(false)
    const handleShowPassword= ()=>setShowPassword(!showPassword)
    const handleSubmit=()=>{}
    const handleChange= ()=>{}
    const classes = useStyles()

    const switchAuthForm = () => {
        setIsRegister(isRegister => !isRegister)
        setShowPassword(false)
    }

    const googleSuccess = async (res)=>{
        console.log(res)
        const token = res?.tokenId
        const result =  res?.profileObj
        try {
            dispatch({type:AUTH, data:{result, token}})
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    const googleFailure = ()=>{
        console.log('google login failed, try again')
    }


    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant='h5'>{isRegister ? 'Register':'Log In'} </Typography>

                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2} >
                        {isRegister ? (
                            <>
                                <Input name='firstname' label="First Name" handleChange={handleChange} autoFocus half/>
                                <Input name='lastname' label="Last Name" handleChange={handleChange} half/>
                            </>
                        ):null}
                        <Input name='email' label="Email address" handleChange={handleChange} type='email'/>
                        <Input name='password' label="Password" type={showPassword ? 'text' : 'password'}
                         handleChange={handleChange} handleShowPassword={handleShowPassword} />

                         {isRegister && 
                            <Input name='confirmPassword' label="Confirm Password" type='password' handleChange={handleChange} />
                        }
                        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                            {isRegister ? 'Register':'Log In'}
                        </Button>

                        <GoogleLogin
                            clientId='1081033848043-re0mn2dfpcno777u7ug9641sma7rq3ss.apps.googleusercontent.com'
                            render={(renderProps)=>(
                                <Button startIcon={<Icon/>} onClick={renderProps.onClick} disabled={renderProps.disabled}
                                 fullWidth variant='contained' color='primary' className={classes.googleButton} >
                                    Google Login
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy='single_host_origin'
                            />

                        <Grid container justify='center'>
                            <Grid item>
                                <Button onClick={switchAuthForm}>
                                    {isRegister ? 'Already have an account? Log In':'Don\'t have an account? Register' }
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}
