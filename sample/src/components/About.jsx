import Profileimg from "../assets/image/2112.i301.031.S.m004.c13.UI and UX designers concepts isometric composition.jpg";
import eduimg2 from '../assets/image/demo2.gif'


const About = () => {
  return (
    <div className=" m-20 flex max-sm:flex-col max-sm:m-0 max-sm:items-center">
      <div className=" w-1/2 flex flex-col justify-center items-center max-sm:w-[80%] ">
        <img src={eduimg2} className=""></img>
      </div>
      <div className=" w-1/2  bg-white flex flex-col justify-center  max-sm:w-full ">
        <div className="flex flex-col justify-start  max-sm:m-5">
            <h1 className="text-3xl mb-2  w-[100%] pb-2 font-serif font-semibold max-sm:text-2xl">
              ABOUT ME !
            </h1>
          <p className="text-justify  text-2xl font-semibold text-gray-500 max-sm:text-xl">
            I am a dedicated Software Development student, passionate about
            learning and honing my technical skills. I believe in working hard and constantly challenging myself to grow
            in this field.  
          </p>
        </div>

        <div className="flex flex-col justify-start m-5">
            <h1 className="text-justify font-bold font-serif text-3xl mb-2 max-sm:text-2xl">
              GET IN TOUCH
            </h1>
            <p className="text-justify text-2xl font-semibold text-gray-500 max-sm:text-xl">Madhan</p>
            <p className="text-justify text-2xl font-semibold text-gray-500 max-sm:text-xl">Student | SIET</p>
            <p className="text-justify text-2xl font-semibold text-gray-500 max-sm:text-xl">+91-9363234339</p>
            <p className="text-justify text-2xl font-semibold text-gray-500 max-sm:text-xl">madhang2306@gmail.com</p>
            <p className="text-justify text-2xl font-semibold text-gray-500 max-sm:text-xl">coimbatore Tamilnadu, 641-658</p>
        </div>
      </div>
    </div>
  );
};

export default About;
