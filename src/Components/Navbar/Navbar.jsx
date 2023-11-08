import { Link } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useContext } from "react";
import { BookContext } from "../../Providers/BookProvider";

const Navbar = () => {
    const { handleThemeSwitch, theme } = useContext(BookContext)
    //handle switch for dark mode
    const changeTheme = () => {
        handleThemeSwitch();
    }
    
    //read user from context
    const { user, logoutUser } = useAuth();
    const links = <>
        <Link className="btn btn-ghost  text-white dark:text-black" to="/">Home</Link>
        <Link className="btn btn-ghost  text-white dark:text-black" to="/addBook">Add Book</Link>
        <Link className="btn btn-ghost  text-white dark:text-black" to="/addCategory">Add Category</Link>
        <Link className="btn btn-ghost  text-white dark:text-black" to="/allBooks">All Books</Link>
        <Link className="btn btn-ghost  text-white dark:text-black" to="/borrowedBooks">Borrowed Books</Link>
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
            <div className="bg-black dark:bg-white  sticky top-0 z-50 navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img className="w-16" src="https://i.ibb.co/2jpm3y2/booklogo2.png" alt="" />
                    </Link>
                    <Link to="/"><h2 className="text-base md:text-xl  text-white dark:text-black font-bold">Book Shelf</h2></Link>
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
                            <span className="mr-2  text-white dark:text-black">{user?.displayName}</span>
                            <Link onClick={handleLogout} className="btn bg-[#2c2c2c91] bg-orange-500 dark:text-black border-none rounded-none text-white" >Logout</Link>
                        </>
                    }

                    {
                        theme == "dark" ? <FiMoon className="cursor-pointer text-3xl mx-2 text-black" onClick={changeTheme} /> :
                            <FiSun className="cursor-pointer text-3xl mx-2 text-white" onClick={changeTheme} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;