import { React, useState } from 'react'
import loginImg from '../assets/login.png'
const Login = () => {

    const [currState, setCurrentState] = useState('Sign Up')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <section className='absolute top-0 left-0 z-50 w-full h-full bg-white'>
            {/* Container */}
            <div className='flex w-full h-full'>
                {/* Image Side */}
                <div className='hidden w-1/2 sm:block'>
                    <img className='object-cover w-full h-full aspect-square' src={loginImg} alt="" />
                </div>
                {/* Form side */}
                <div className='w-full flexCenter sm:w-1/2'>
                    <form className=' flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-800'>
                        <div className='w-full mb-4'>
                            <h3 className='bold-36'>{currState}</h3>
                        </div>
                        {currState === 'Sign Up' && (
                            <div className='w-full'>
                                <label htmlFor="name" className='medium-14'>Name</label>
                                <input type="text" placeholder='Name' className='w-full px-3 py-1 mt-1 rounded ring-1 ring-offset-slate-900/10 bg-primary' />
                            </div>
                        )}
                        <div className='w-full'>
                            <label htmlFor="email" className='medium-14'>Email</label>
                            <input type="text" placeholder='Email' className='w-full px-3 py-1 mt-1 rounded ring-1 ring-offset-slate-900/10 bg-primary' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="password" className='medium-14'>Password</label>
                            <input type="text" placeholder='Password' className='w-full px-3 py-1 mt-1 rounded ring-1 ring-offset-slate-900/10 bg-primary' />
                        </div>
                        <button type='submit' className='w-full btn-dark mt-5 !py-[7px] !rounded '>{currState === 'Sign Up' ? 'Sign Up' : 'Login'}</button>
                        <div className='flex flex-col w-full gap-y-3 medium-14 '>
                            <div className='underline'>
                                Forgot your password?
                            </div>
                            {currState === 'Login' ? (
                                <div className='underline'>Don't have an account? <span className='cursor-pointer hover:text-secondary' onClick={() => setCurrentState('Sign Up')}> Create account</span></div>
                            ) : (
                                <div className='underline'>Already have an account? <span className='cursor-pointer hover:text-secondary' onClick={() => setCurrentState('Login')}> Login</span></div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login
