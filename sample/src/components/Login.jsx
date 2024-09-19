import React, { useState } from 'react'

const Login = () => {
    const [visible,setVisible] = useState(true);

  return (
    <>
    {
        visible && (
            <>
                <div className = "h-screen  bg-slate-400 flex justify-center items-center m-5">
                    <div className = "h-auto w-1/4 bg-white rounded-md flex flex-col justify-center items-center">
                    
                    <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4  m-6 ">
                    <u><h1 className="font-extrabold text-3xl font-serif text-gray-700 ">Sign In Form</h1></u>
                    <input type = "text" id = "name" placeholder = "Name" className = "bg-slate-700 w-full font-bold rounded-lg h-10 p-3  focus:ring-4 focus:ring-gr-600 focus:border-transparent focus:outline-none " ></input> 
                    <input type = "email" id = " email" placeholder = "Email" className = "bg-slate-700 w-full font-bold rounded-lg h-10 p-3 focus:ring-4 focus:ring-gr-600 focus:border-transparent focus:outline-none" ></input> 
                    <input type = "number" id = "pnp=o" placeholder = "Phone Number" className = "bg-slate-700 w-full font-bold rounded-lg h-10 p-3 focus:ring-4 focus:ring-gr-600 focus:border-transparent focus:outline-none"  ></input> 
                    <input type = "password" id = "password" placeholder = "Password" className = "bg-slate-700 w-full font-bold rounded-lg h-10 p-3 focus:ring-4 focus:ring-gr-600 focus:border-transparent focus:outline-none" ></input> 
                    <button onClick={() => setVisible(!visible)}  className = "bg-red-200  h-[20%] w-[50%] rounded-md text-gray-700 focus:ring-4 focus:ring-black focus:border-transparent focus:outline-none hover:bg-red-500 ">Submit</button>
                    </form>
                    

                    </div>
                    
                </div>
            </>    
        )
    }
                {/* <button onClick={() => setVisible(true)} className = 'bg-black text-white '>open</button> */}
       
    </>
  )
}

export default Login
