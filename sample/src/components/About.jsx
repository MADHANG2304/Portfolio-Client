import Profileimg from "../assets/image/2112.i301.031.S.m004.c13.UI and UX designers concepts isometric composition.jpg";

const About = () => {
  return (
    <div className=" m-5 flex max-sm:flex-col">
      <div className=" w-1/2 flex flex-col justify-center items-center ">
        <img src={Profileimg} className=""></img>
      </div>
      <div className=" w-1/2  bg-white flex flex-col justify-center">
        <div className="flex flex-col justify-start m-5">
          {/* <u className="text-red-500"> */}
            <h1 className="text-3xl mb-2 text-red-500 w-[100%] pb-2 font-serif">
              ABOUT ME !
            </h1>
          {/* </u> */}
          <p className="text-justify  text-2xl font-medium font-serif">
            I am a dedicated Software Development student, passionate about
            learning and honing my technical skills. I believe in working hard and constantly challenging myself to grow
            in this field.  
          </p>
        </div>

        <div className="flex flex-col justify-start m-5">
            <h1 className="text-justify font-medium font-serif text-3xl mb-2 text-red-500">
              GET IN TOUCH
            </h1>
            <p className="text-justify text-2xl  ">Madhan</p>
            <p className="text-justify text-2xl  ">Student | SIET</p>
            <p className="text-justify text-2xl  ">+91-9363234339</p>
            <p className="text-justify text-2xl  ">madhang2306@gmail.com</p>
            <p className="text-justify text-2xl  ">coimbatore Tamilnadu, 641-658</p>
        </div>
      </div>
    </div>
  );
};

export default About;
