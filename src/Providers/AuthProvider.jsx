import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const googleProvider= new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    //current user change observer 
    useEffect(()=>{
        const unsubscirbe =  onAuthStateChanged(auth, currentUser=>{          
              
            setUser(currentUser);
            const userEmail= currentUser?.email || user?.email;
            const loggedInUser= {email: userEmail};
            setLoading(false);
            if(currentUser){                
                const loggedInUser= {email: currentUser?.email};
                axios.post('https://bookshelfserver-brown.vercel.app/jwt', loggedInUser, {
                    withCredentials: true
                })
                .then(res=>{
                    console.log('Token response from server:', res.data);
                })
                setLoading(false);
                console.log(currentUser);
                
           }else{
            axios.post('https://bookshelfserver-brown.vercel.app/logout', loggedInUser, {
                withCredentials: true
            })
            .then(res=>{
                console.log(res.data);
            })
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
    //email login
    const loginUser= (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logoutUser=()=>{
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        updateUser,
        loginUser,
        loading,
        googleLogin,
        logoutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;