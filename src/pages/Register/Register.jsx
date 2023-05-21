import React, { useContext } from 'react';
import logo from '../../assets/Logo/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-hot-toast';
const Register = () => {
    const { user, profileUpdate, createUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const URL = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            return toast.error('Password is too short')
        }
        else if (/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"/.test(password)) {
            return toast.error('Password must have 1 uppercase, 1 lowercase, 1 digit and 1 special character')
        }
        createUser(email, password).then(result => {
            const createdUser = result.user;
            profileUpdate(name,URL).then(result => {}).catch(err => {})
            toast.success('User Created Successfully');
            form.reset();
            navigate('/login')
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