import React from 'react'

const Contact = () => {
  return (
    <div className='h-auto  m-5 flex flex-col  items-center'>
      <h1 className='mb-9 mt-10 text-5xl font-bold'>Get In Touch</h1>
      <form className=' w-[30%]  flex flex-col items p-5'>
        <label className='font-semibold mb-1'>Name*</label>
        <input type='text' id='name' placeholder='Enter Your Name..' className='h-16 w-[100%] border-2 border-gray-600 mb-2 rounded-md p-3' required ></input>
        <label className='font-semibold mb-1'>Email*</label>
        <input type='email' id='email' placeholder='Enter Your Email..' className='h-16 w-[100%] border-2 border-gray-600 mb-2 rounded-md p-3' required ></input>
        <label className='font-semibold mb-1'>Phone Number*</label>
        <input type='number' id='number' placeholder='Enter Your Phone..' className='h-16 w-[100%] border-2 border-gray-600 mb-2 rounded-md p-3' required ></input>
        <label className='font-semibold mb-1'>Password*</label>
        <input type='password' id='password' placeholder='Enter Your Password..' className='h-16 w-[100%] border-2 border-gray-600 mb-4 rounded-md p-3' required ></input>
        <center><button className='h-14 w-[50%] rounded-sm bg-lime-500' >Submit</button></center>
      </form>
    </div>
  )
}

export default Contact
