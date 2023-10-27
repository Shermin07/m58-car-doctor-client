

import { createContext, useState } from 'react';
import app from '../Firebase/firebase.init';
import { getAuth } from "firebase/auth";

 export const auth = getAuth(app);
 export const AuthContext = createContext() ;

 
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null) ;
    const [loading, setLoading] = useState(true) ;



    const authInfo = {
        user,

    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;