import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

  const {signIn, user} = useContext(AuthContext) ;

    const handleLogin = e =>{
        e.preventDefault();

        const email = e.target.email.value ;
        const password = e.target.password.value ;
        console.log(email, password)


        //signIn
        signIn(email,password)
        .then( result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center mr-28 w-1/2 lg:text-left">
           <img className="" src={login}></img>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-xl font-bold">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
               <input type="submit" className="btn btn-primary" value='Login'/>
              </div>
            </form>
            <p className="ml-7 mb-5">Do not have an account? Please <Link to='/register' className="underline text-blue-700">Register</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;