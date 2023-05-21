import React, { useContext } from 'react';
import logo from '../../assets/Logo/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-hot-toast';
import useTitleHook from '../../hooks/useTitleHook';
const Login = () => {
    useTitleHook('Login')
    const { user, loginUser, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location?.state?.from.pathname || '/';
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password).then(result => {
            const user = result.user;
            toast.success("Login Success full")
            navigate(from, {replace: true})
        }).catch(error => {
            toast.error(error.message)
        })
    }
    const handleGoogleLogin = () => {
        googleLogin().then(result => {
            const loggedUser = result.user;
            toast.success('Login Successfully')
        }).catch(error => {
            toast.error(error.message)
        })
    }
    return (
        <div className='py-8'>
            <div className='lg:w-1/2 mx-auto'>
                <div className=' px-6 rounded-xl py-8 mx-auto shadow-2xl'>
                    <div className='text-center space-y-4'>
                        <img src={logo} className='mx-auto w-24' alt="" />
                        <h2 className='text-3xl font-bold text-blue-400'>ACCOUNT LOGIN</h2>
                    </div>
                    <form onSubmit={handleLogin} className='space-y-5 my-5'>
                        <div className="form-control">
                            <input type="email" name='email' placeholder="Email" className="h-12 w-4/5 mx-auto input rounded-sm bg-base-300 border-collapse" />
                        </div>
                        <div className="form-control">
                            <input type="password" name='password' placeholder="Password" className="h-12 w-4/5 mx-auto input rounded-sm bg-base-300 border-collapse" />
                        </div>
                            <Link className="label-text-alt ml-20 link link-hover">Forgot password?</Link>
                        <div className='text-center'>
                            <input type="submit" value="Login" className='btn border-0 w-4/5 mx-auto bg-blue-400' />
                        </div>

                    </form>
                    <div className="divider w-4/5 mx-auto">OR</div> 
                    <div className='text-center mb-4'>
                        <button onClick={handleGoogleLogin} className='btn lg:w-4/12 bg-orange-300 border-0'>
                            <FaGoogle className='mr-3 inline-block'/>
                            Google Login</button>
                    </div>
                    <div className='text-center'>
                        <h3 className='text-center'>
                            Don't Have Account?
                        </h3>
                        <Link to='/register' className="text-green-700  link-hover">Create One</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;