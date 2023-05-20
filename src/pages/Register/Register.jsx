import React, { useContext } from 'react';
import logo from '../../assets/Logo/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-hot-toast';
const Register = () => {
    const { user, createUser } = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const URL = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password).then(result => {
            const createdUser = result.user;
            createdUser.displayName = name;
            createdUser.photoURL = URL;
            toast.success('User Created Successfully')
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
                        <h2 className='text-3xl font-bold text-blue-400'>ACCOUNT REGISTER</h2>
                    </div>
                    <form onSubmit={handleSignUp} className='space-y-5 my-5'>
                        <div className="form-control">
                            <input type="text" name='name' placeholder="Name" className="h-12 w-4/5 mx-auto input rounded-sm bg-base-300 border-collapse" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='url' placeholder="Photo Url" className="h-12 w-4/5 mx-auto input rounded-sm bg-base-300 border-collapse" />
                        </div>
                        <div className="form-control">
                            <input type="email" name='email' placeholder="Email" className="h-12 w-4/5 mx-auto input rounded-sm bg-base-300 border-collapse" />
                        </div>
                        <div className="form-control">
                            <input type="password" name='password' placeholder="Password" className="h-12 w-4/5 mx-auto input rounded-sm bg-base-300 border-collapse" />
                        </div>
                        <div className='text-center'>
                            <input type="submit" value="Register" className='btn border-0 w-4/5 mx-auto bg-blue-400' />
                        </div>

                    </form>
                    <div className="divider w-4/5 mx-auto">OR</div>
                    <div className='text-center'>
                        <h3 className='text-center'>
                            Already Have Account?
                        </h3>
                        <Link to='/login' className="text-green-700  link-hover">Please Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;