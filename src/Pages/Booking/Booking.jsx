/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-duplicate-props */


import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";


const Booking = () => {

    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);


  useEffect( () =>{
  fetch(`http://localhost:5000/booking?email=${user?.email}`)
  .then(res =>res.json())
  .then(data => {
    console.log(data)
    setBookings(data)
   
  })
  } ,[])

    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
         
         {
            bookings?.map(booking => <BookingRow key = {booking._id} 
             booking={booking}>

            </BookingRow>)
         }
         
          
         
          </tbody>
        
          
        </table>
      </div>
    );
};

export default Booking;