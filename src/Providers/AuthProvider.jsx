import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    //current user change observer 
    useEffect(()=>{
        const unsubscirbe =  onAuthStateChanged(auth, currentUser=>{            
            setUser(currentUser);
            setLoading(false);
            if(currentUser){                
                const loggedInUser= {email: currentUser?.email};
                axios.post('http://localhost:5000/jwt', loggedInUser, {
                    withCredentials: true
                })
                .then(res=>{
                    console.log('Token response from server:', res.data);
                })
                setLoading(false);
                console.log(currentUser);
                
           }else{
                console.log('User is signed out');
            }
        })
        return ()=>{
            unsubscirbe();
        };
    },[])
    
    //create new user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //update created user info
    const updateUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const loginUser= (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        updateUser,
        loginUser,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;