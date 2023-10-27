import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";
import Footer from "../Components/Footer/Footer";
import Home from "../Pages/Home/Home";


const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navber></Navber>
           
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;