import { useEffect, useState } from "react";
import ServiceCards from "./ServiceCards";


const Services = () => {

    const [services, setServices] = useState();
    useEffect( () =>{
        fetch("http://localhost:5000/services")
        .then(res =>res.json())
        .then(data =>setServices(data))
    }
        ,[])
    return (
        <div>
            <h1 className="text-center text-blue-600 mb-2 font-bold text-3xl">Our Services Area</h1>
            <p className="text-center font-semibold mb-3 text-lg">the majority have suffered alteration in some form, by injected humour, or randomised <br></br>words which do not look even slightly believable. </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                {
                services?.map(service =><ServiceCards key={service._id} service ={service}></ServiceCards>)
                }
            </div>
        </div>
    );
};

export default Services;