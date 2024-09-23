import {  Github, Linkedin, Instagram} from 'lucide-react';
import Userimg from '../assets/image/Userimg.jpg'
import Userimg2 from '../assets/image/3d-rendering-kid-playing-online.jpg'

const Landpage = () => {
  return (
    <>

    <div className="h-full m-5 flex  max-sm:flex-col justify-center items-center">

        {/* <div className="flex justify-center  h-[100%] w-[100%] border-2"> */}
        
            {/* User Divison(Left-Side) */}
            <div className="h-[70%] w-[70%] bg-bl  flex flex-col gap-2  items-center  ">
                <div className="h-auto  flex  flex-col gap-2  justify-start items-start ">
                    <h1 className="text-3xl font-\ font-serif ">Hello,</h1>
                    <h1 className="text-6xl font-medium">I'm <span className="text-5xl text-red-500 font-Fantasy font-bold text-center">Madhan</span></h1>
                    <h1 className = 'font-bold text-5xl' >Website Designer</h1>
                    {/* <h3 className="text-center text-2xl">I am Good</h3> */}
                    <div className='  flex gap-7 justify-start mt-2'>
                        <Github className='w-10 h-10 text-slate-500 hover:text-black'/>
                        <Linkedin className='w-10 h-10 text-slate-500 hover:text-sky-400'/>
                        <Instagram className='w-10 h-10 text-slate-500 hover:text-pink-500'/>
                    </div>
                </div>
            </div>

            {/* Image Division(Right-Side) */}
            <div className="h-[80%] w-1/2  m-5 ">
            <img src={Userimg2} className = ' rounded-xl' ></img>
            </div>

        {/* </div> */}

    </div>
      
    </>
  )
}

export default Landpage
