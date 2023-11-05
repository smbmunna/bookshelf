import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Registration = () => {
    const {setUser, user, createUser, updateUser}= useAuth();

    const handleRegistration = event => {
        event.preventDefault();        
        const form= event.target;
        const name= form.name.value;        
        const email= form.email.value;
        const password= form.password.value;
        const photo= form.photo.value;

        createUser(email, password)
        .then(result=> {
            if(result.user.email){
                updateUser(name, photo)
                .then(()=>{
                    //  console.log('User Created and Profile updated');
                    //  console.log(result.user.displayName, result.user.photoURL);
                     setUser(result.user);
                     //console.log(user);
                })
                .catch(error=>{
                    console.log(error.message);
                })
            }
        })
        .catch(error=>{
            console.log(error.message);
        })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistration} className="card-body">
                            <h2 className='text-2xl font-semibold text-blue-700 text-center'>Register</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                            </div>
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
                                    <Link to='/login'>Already have Account? <span className='font-bold  text-blue-800'>Login</span></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;