import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { NavLink } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext) ;

    if(loading){
        <span className="loading loading-spinner ml-10 loading-lg"></span>
    }

    if(user?.email){
        return children ;
    }
    return <NavLink to='/login'></NavLink>
};

export default PrivateRoute;