/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-duplicate-props */


import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";


const Booking = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);


    const  handleDelete = id =>{

        const proceed = confirm('are you want to delete')
        if(proceed){
            fetch(`http://localhost:5000/booking/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount >0){
                    alert('deleted successfully')
                    const remaining = bookings?.filter(booking => booking._id !== id)
                    setBookings(remaining)  // delete hoye jabe baki guli thakbe
                }
            })
        }
    }

  


  useEffect( () =>{
  fetch(`http://localhost:5000/booking?email=${user?.email}`)
  .then(res =>res.json())
  .then(data => {
    console.log(data)
    setBookings(data)
   
  })
  } ,[])

    return (
     <div>
           <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
                 </th>
              <th>Image</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            
             
             
            </tr>
          </thead>
          <tbody>
         
         {
            bookings?.map(booking => <BookingRow key = {booking._id} 
             booking={booking}
             handleDelete={handleDelete}
             
             >

            </BookingRow>)
         }
         
          
         
          </tbody>
        
          
        </table>
      </div>
     </div>
    );
};

export default Booking;