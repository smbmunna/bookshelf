import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading}= useAuth();
    const location= useLocation();
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }
    if(user){
        return children; 
    }else{
        return <Navigate state={location} to='/login' />
    }
};

export default PrivateRoute;