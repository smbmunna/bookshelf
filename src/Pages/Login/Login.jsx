import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { loginUser,googleLogin } = useAuth();
    //state for login error
    const [loginError, setLoginError] = useState('');

    //for redirecting user to desired path
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        //Resetting Login error 
        setLoginError('');

        loginUser(email, password)
            .then(() => {
                //console.log(result.user);
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                setLoginError(error.message);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                //redirecting to desired page after login
                navigate(location.state ? location.state : '/' );
            })
            .catch(error => {
                setLoginError(error.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h2 className='text-2xl font-semibold text-Black-700 text-center'>Login</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to='/registration'>New to This Site? <span className='font-bold  text-blue-800'>Register</span></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white rounded-none bg-orange-500 mt-4 ">Login</button>
                            </div>
                            <div>
                                <button
                                    onClick={handleGoogleLogin}
                                    className="btn text-white rounded-none bg-orange-500 mt-4 w-full ">
                                    <FcGoogle className="text-3xl" />  Google Login
                                </button>
                            </div>
                            <p className='text-red-400 text-center font-bold'>
                                {loginError}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;