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
import {register, login} from '../../actions/auth.js'

export const Auth = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false)
    const [showRegisterForm, setshowRegisterForm] = useState(false)
    const [formData, setFormData] = useState({firstname:'', lastname:'',email:'', password:'', confirmPassword:'' })
    const handleShowPassword= ()=>setShowPassword(!showPassword)

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(showRegisterForm){
            dispatch(register(formData, history))
        }        
        else{
            dispatch(login(formData, history))
        }
    }   
    const handleChange= (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const classes = useStyles()

    const switchAuthForm = () => {
        setshowRegisterForm(showRegisterForm => !showRegisterForm)
        setShowPassword(false)
    }

    const googleSuccess = async (res)=>{
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
        alert('google login was unsuccessful, try again')
    }


    return (
        <Container className={classes.main} component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant='h5'>{showRegisterForm ? 'Register':'Log In'} </Typography>

                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2} >
                        {showRegisterForm ? (
                            <>
                                <Input name='firstname' label="First Name" handleChange={handleChange} autoFocus half/>
                                <Input name='lastname' label="Last Name" handleChange={handleChange} half/>
                            </>
                        ):null}
                        <Input name='email' label="Email address" handleChange={handleChange} type='email'/>
                        <Input name='password' label="Password" type={showPassword ? 'text' : 'password'}
                         handleChange={handleChange} handleShowPassword={handleShowPassword} />

                         {showRegisterForm && 
                            <Input name='confirmPassword' label="Confirm Password" type='password' handleChange={handleChange} />
                        }
                        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                            {showRegisterForm ? 'Register':'Log In'}
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
                                    {showRegisterForm ? 'Already have an account? Log In':'Don\'t have an account? Register' }
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}
