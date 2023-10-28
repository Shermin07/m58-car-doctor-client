import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Checkout = () => {

    const service = useLoaderData();
    const{_id,service_id,title,img,price} = service;
    const {user} = useContext(AuthContext);


    const handleBookingService = e =>{

       // console.log('hello')
        e.preventDefault();

        const name = e.target.name.value ;
        const email = user?.email;
        const date = e.target.date.value ;
       // console.log(name, email, date)

        // ki ki order dibo tar ekta object create korte hobe post korar jonno
        const booking = {
            customerName : name,
            price, 
            date,
            img,
             email,
             title,
             service: _id, 
             service_id

        }
        console.log(booking);
        // post korar jonno fetch korbo ,add korbo post method ,same url name as beckend
        fetch("http://localhost:5000/booking",{
            method : 'POST',
            Headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking) // object er name
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })


    }
    return (
        <div>
          
      <form onSubmit={handleBookingService} className="card-body">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="form-control">
          <label className="label">
            <span className="label-text "> Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.displayName} placeholder=" Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text"  defaultValue={'$'+ price} placeholder="Phone number" className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
        
        </div>
      
       </div>
        <div className="form-control mt-6">
         
          <input type="submit" value='Order Confirm' className="btn btn-primary btn-block"/>
        </div>
      </form>
 
        </div>
    );
};

export default Checkout;