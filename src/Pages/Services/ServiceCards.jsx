

const ServiceCards = ({service}) => {
    const {_id,service_id,title,img,price} = service || []
    return (
        <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500">
        <figure className="px-10 pt-10">
          <img src={img} alt="Car" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>Price:{price}$</p>
        
        </div>
      </div>
    );
};

export default ServiceCards;