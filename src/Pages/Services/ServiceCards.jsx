import { Link } from "react-router-dom";


const ServiceCards = ({service}) => {
    const {_id,service_id,title,img,price} = service || []
    return (
        <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500">
        <figure className="px-10 pt-10">
          <img src={img} alt="Car" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">{title}</h2>
          <p className="text-white">Price:{price}$</p>
        <Link  to={`/checkout/${_id}`} className="btn">Book now</Link>
        </div>
      </div>
    );
};

export default ServiceCards;