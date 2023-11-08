import { Link } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
    //read user from context
    const { user, logoutUser } = useAuth();
    const links = <>
        <Link className="btn btn-ghost" to="/">Home</Link>
        <Link className="btn btn-ghost" to="/addBook">Add Book</Link>
        <Link className="btn btn-ghost" to="/addCategory">Add Category</Link>
        <Link className="btn btn-ghost" to="/allBooks">All Books</Link>
        <Link className="btn btn-ghost" to="/borrowedBooks">Borrowed Books</Link>
        {
            !user &&
            <>
                <Link className="btn btn-ghost" to="/login">Login</Link>
                <Link className="btn btn-ghost" to="/registration">Registration</Link>
            </>
        }
    </>

    const handleLogout = () => {
        logoutUser()
            .then(() => console.log('user logged out'))
            .catch(error => { console.log(error.message) })
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user &&
                        <>
                            <img className="w-10 mr-2" src={user?.photoURL} alt="" />
                            <span className="mr-2 text-black">{user?.displayName}</span>
                            <Link onClick={handleLogout} className="btn btn-primary bg-[#2c2c2c91] dark:bg-slate-300 dark:text-black dark:border-none rounded-none text-white" to='/login'>Logout</Link>
                        </>
                    }

                    {/* {
                        theme == "dark" ? <FiMoon className="cursor-pointer text-3xl mx-2 text-black" onClick={changeTheme} /> :
                            <FiSun className="cursor-pointer text-3xl mx-2 text-white" onClick={changeTheme} />
                    } */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;