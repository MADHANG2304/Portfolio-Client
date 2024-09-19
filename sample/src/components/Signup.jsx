import React from 'react'

const demo = ({formname}) => {
  return (
    <>
    <div className = "h-screen w-screen bg-slate-400 flex justify-center items-center">
        <div className = "h-2/5 w-1/4 bg-white rounded-md flex flex-col justify-center items-center ">
        
        <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4 ">
          <u><h1 className="font-extrabold text-3xl font-serif text-gray-700 ">{formname
            }</h1></u>
          <input type = "email" name = " " placeholder = "Email" className = "bg-slate-700 w-full font-bold rounded-lg h-10 p-3 focus:ring-4 focus:ring-gr-600 focus:border-transparent focus:outline-none" ></input> 
          <input type = "password" name = " " placeholder = "Password" className = "bg-slate-700 w-full font-bold rounded-lg h-10 p-3 focus:ring-4 focus:ring-gr-600 focus:border-transparent focus:outline-none" ></input> 
          <button className = "bg-red-200  h-[15%] w-[50%] rounded-md text-gray-700 focus:ring-4 focus:ring-black focus:border-transparent focus:outline-none hover:bg-red-500 "  >Submit</button>
        </form>
        
        </div>
      </div>
      </>
  )
}

export default demo
