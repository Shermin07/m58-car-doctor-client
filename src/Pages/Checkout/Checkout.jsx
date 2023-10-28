import { useLoaderData } from "react-router-dom";


const Checkout = () => {

    const service = useLoaderData();
    const{_id,service_id,title,img,price} = service;
    return (
        <div>
          
      <form className="card-body">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="form-control">
          <label className="label">
            <span className="label-text ">First Name</span>
          </label>
          <input type="text" placeholder="First name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="text" placeholder="Last name" className="input input-bordered" required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="text" placeholder="Phone number" className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        
        </div>
        <div>
            <textarea className=""></textarea>
        </div>
       </div>
        <div className="form-control mt-6">
         
          <input type="submit" value='checkout' className="btn btn-primary btn-block"/>
        </div>
      </form>
 
        </div>
    );
};

export default Checkout;