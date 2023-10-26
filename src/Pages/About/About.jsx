import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div>
            
            
            <div className="hero min-h-screen ">
  <div className="hero-content  h-64 flex-col lg:flex-row">
    <div className="lg:w-1/2 relative">
    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={parts} className="w-1/2 border-8 border-white absolute right-5 -bottom-12 rounded-lg shadow-2xl" />
    </div>
    <div className="lg:w-1/2">
    <h1 className=" font-bold text-xl mb-2 text-blue-600">About Us</h1>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <button className="btn btn-active btn-primary text-white">Get Started</button>
    </div>
  </div>

            </div>
            
        </div>
    );
};

export default About;