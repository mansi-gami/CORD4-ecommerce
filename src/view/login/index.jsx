import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../redux/loginActions'
import { user } from '../../data/user'
import logo from 'assets/images/logo.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { control, register, reset, watch, formState: { errors, isDirty, dirtyFields }, handleSubmit, setValue, resetField, setError, getValues } = useForm({ mode: 'onSubmit' })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        if (data.email === user.email && data.password === user.pass) {
            dispatch(loginSuccess({ name: user.username }))
            localStorage.setItem('username', user.username)
            navigate(-1)
        } else {
            console.log('Invalid credentials')
        }
    }

    return (
        <div className='login-page'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <img src={logo} className='logo' alt="Logo" />
                <div className='form-group'>
                    <input placeholder='Enter Email' type="text" {...register('email', { required: '*Email is required' })} />
                    {errors.email && <span className='error'>{errors.email.message}</span>}
                </div>
                <div className='form-group'>
                    <input placeholder='Enter Password' type="password" {...register('password', { required: '*Password is required' })} />
                    {errors.password && <span className='error'>{errors.password.message}</span>}
                </div>
                <button className='btn-form-submit' type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login