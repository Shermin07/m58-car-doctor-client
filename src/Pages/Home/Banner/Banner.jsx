
import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"

const Banner = () => {
    return (
        <div className="carousel   h-[400px]  w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={img1}className="w-full" />
          <div className="absolute pl-11 top-9   ">
            <div className="text-blue-600  mt-11  text-3xl font-extrabold">
            Affordable<br></br> Price For Car<br></br> Servicing
            </div>
            <p className="text-blue-600 mt-5 text-md mb-7 font-semibold" >There are many variations of passages of  available,<br></br>
                 but the majority have suffered alteration in some form</p>
            <div className="flex gap-5 ">
            <button className="btn  btn-active btn-primary text-white">Discover More</button>
            <button className="btn btn-active btn-primary text-white">Latest Project</button>
            </div>
          
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1  ">
            <a href="#slide4" className="btn btn-circle bg-blue-600 text-white mr-4">❮</a> 
            <a href="#slide2" className="btn btn-circle  bg-blue-600 text-white ">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2}className="w-full" />
          <div className="absolute pl-11 top-9  ">
            <div className="text-blue-600 mt-11  text-3xl font-extrabold">
            Affordable<br></br> Price For Car<br></br> Servicing
            </div>
            <p className="text-blue-600 mt-5 text-md mb-7 font-semibold " >There are many variations of passages of  available,<br></br>
                 but the majority have suffered alteration in some form</p>
            <div className="flex gap-5 ">
                
            <button className="btn  btn-active btn-primary text-white">Discover More</button>
            <button className="btn  btn-active btn-primary text-white">Latest Project</button>
            </div>
          
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1  ">
            <a href="#slide1" className="btn btn-circle  bg-blue-600 text-white  mr-4">❮</a> 
            <a href="#slide3" className="btn btn-circle  bg-blue-600 text-white ">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3}className="w-full" />
          <div className="absolute pl-11 top-9 ">
            <div className="text-blue-600 mt-11  text-3xl font-extrabold">
            Affordable<br></br> Price For Car<br></br> Servicing
            </div>
            <p className="text-blue-600 mt-5 text-md mb-7 font-semibold" >There are many variations of passages of  available,<br></br>
                 but the majority have suffered alteration in some form</p>
            <div className="flex gap-5 ">
            <button className="btn  btn-active btn-primary text-white">Discover More</button>
            <button className="btn  btn-active btn-primary text-white">Latest Project</button>
            </div>
          
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1  ">
            <a href="#slide2" className="btn btn-circle  bg-blue-600 text-white  mr-4">❮</a> 
            <a href="#slide4" className="btn btn-circle  bg-blue-600 text-white ">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute pl-11 top-9 ">
            <div className="text-blue-600 mt-11  text-3xl font-extrabold">
            Affordable<br></br> Price For Car<br></br> Servicing
            </div>
            <p className="text-blue-600 mt-5 text-md mb-7 font-semibold" >There are many variations of passages of  available,<br></br>
                 but the majority have suffered alteration in some form</p>
            <div className="flex gap-5 ">
            <button className="btn  btn-active btn-primary text-white">Discover More</button>
            <button className="btn  btn-active btn-primary text-white">Latest Project</button>
            </div>
          
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1  ">
            <a href="#slide3" className="btn btn-circle  bg-blue-600 text-white  mr-4">❮</a> 
            <a href="#slide1" className="btn btn-circle  bg-blue-600 text-white ">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;