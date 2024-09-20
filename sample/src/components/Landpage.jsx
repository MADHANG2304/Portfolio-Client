import Userimg from '../assets/image/Userimg.jpg'

const Landpage = () => {
  return (
    <>

    <div className="h-full m-5 flex border-2 max-sm:flex-col justify-center items-center">

        {/* <div className="flex justify-center  h-[100%] w-[100%] border-2"> */}
        
            {/* User Divison(Left-Side) */}
            <div className="h-[80%] w-[80%] bg-bl m-5 flex flex-col gap-2  justify-center items-center">
                {/* <div className="h-auto w-[100%]  flex  flex-col  border-2 justify-center items-center m-10"> */}
                    <h1 className="text-5xl  font-serif">I'Am <span className="text-red-500 "> MADHAN G</span></h1>
                    {/* <h3 className="text-center text-2xl">I am Good</h3> */}
                    <h2 className="text-4xl text-slate-500 font-serif text-center">
                        I'm <span>Developer</span>
                    </h2>
                {/* </div> */}
            </div>

            {/* Image Division(Right-Side) */}
            <div className="h-[80%] w-[70%]  m-5 ">
            <img src={Userimg} className='h-[100%] w-[100%] rounded-xl' ></img>

            </div>

        {/* </div> */}

    </div>
      
    </>
  )
}

export default Landpage
