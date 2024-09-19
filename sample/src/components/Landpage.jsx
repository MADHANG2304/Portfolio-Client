import Userimg from '../assets/image/Userimg.jpg'

const Landpage = () => {
  return (
    <>

    <div className="h-full m-5 flex border-2">

        {/* <div className="flex justify-center  h-[100%] w-[100%] border-2"> */}
        
            {/* User Divison(Left-Side) */}
            <div className="h-[80%] w-[80%] bg-bl m-5 flex flex-col gap-2 ">
                <div className="h-auto w-[100%]  flex  flex-col  mt-40 ">
                    <h1 className="text-5xl text-center font-serif">I'Am <span className="text-red-500 "> MADHAN G</span></h1>
                    {/* <h3 className="text-center text-2xl">I am Good</h3> */}
                </div>
                <div className="h-auto w-[100%] ">

                <p className=" m-10 text-justify text-slate-500 font-serif">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                </div>
            </div>

            {/* Image Division(Right-Side) */}
            <div className="h-[80%] w-[70%]  m-5 ">
            <img src={Userimg} className='h-[100%] w-[100%] rounded-xl'></img>

            </div>

        {/* </div> */}

    </div>
      
    </>
  )
}

export default Landpage
