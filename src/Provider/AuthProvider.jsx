/* eslint-disable no-unreachable */


import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";

 export const auth = getAuth(app);
 export const AuthContext = createContext() ;

 
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null) ;
    const [loading, setLoading] = useState(true) ;

    //signUp: step1
    const createUser = (email, password) =>{
        setLoading(true) ;
        return createUserWithEmailAndPassword(auth,email,password)
       
    }

    // signIn step:3
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }

    // onauthstatechange: step:2
       useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
             setUser(currentUser);
             console.log('current user',currentUser)
             setLoading(false) ;
        })
      return () =>{
         return unSubscribe
      }
    },
    [])

    // step3:: logout

    const logOut = () =>{
        return  signOut(auth) ;
        setLoading(true)
    }


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut

    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;