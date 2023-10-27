

import app from '../Firebase/firebase.init';
import { getAuth } from "firebase/auth";

 export const auth = getAuth(app);

 
const AuthProvider = () => {
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;