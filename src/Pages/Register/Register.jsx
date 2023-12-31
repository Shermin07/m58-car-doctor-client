import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {


    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value ;
        const email = e.target.email.value ;
        const password = e.target.password.value ;
        const photo = e.target.photo.value ;
        console.log(name,email, password,photo)

      // signUp
      createUser(email,password)
      .then(res => {
        console.log(res.user)
      })
      .then(error =>{
        console.log(error)
      })
      


    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center mr-28 w-1/2 lg:text-left">
         
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-xl font-bold">Register</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="photo" name="photo" placeholder="photo" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
               <input type="submit" className="btn btn-primary" value='Register'/>
              </div>
            </form>
            <p className="ml-7 mb-5">Already have an account? Please <Link to='/login' className="underline text-blue-700">Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;