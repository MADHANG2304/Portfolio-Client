import React, { useState } from 'react'

const ProjectCard = ({title,desc,cover,pid,id,link,key,fetchprojects}) => {

  const[titleState, setTitleState] = useState(null);
  const[descState, setDescState] = useState(null);
  const[coverState, setCoverState] = useState(null);
  const[linkState, setLinkState] = useState(null);


  console.log(fetchprojects)



  return (
    <>
          
           {/* {projectdata.map((data,index) => ( */}
           <div className="relative h-[60%] flex w-80 m-10 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
            <div className="relative  mx-4  -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gray-500">
              <img src={cover} className='object-cover'></img>
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {title}
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {desc}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
               {link}
              </button>
            </div>
          </div>
          {/* ))} */}

    </>
  )
}

export default ProjectCard







// import React from 'react'

// const ProjectCard = () => {

//   const projectdata = [
//     {
//       img : "https://www.google.com/logos/2024/popcorn/rc2/cta.png",
//       title : "Tailwind CSS",
//       desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula."
//     },
//     {
//       img : "https://www.google.com/logos/2024/popcorn/rc2/cta.png",
//       title : "Tailwind CSS",
//       desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula."
//     },
//   ]


  

//   return (

//     <div className='h-screen m-5 flex border-2 flex-col '>
//         <h1 className='text-center'>My Projects</h1>

//         <div className='h-[100%] border-2 m-5 flex flex-wrap justify-space-between'>
          
//           {projectdata.map((data,index) => (
//            <div className="relative h-[60%] flex w-80 m-10 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
//             <div className="relative  mx-4  -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gray-500">
//               <img src={data.img} className='h-full'></img>
//             </div>
//             <div className="p-6">
//               <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//                 {data.title}
//               </h5>
//               <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
//                 {data.desc}
//               </p>
//             </div>
//             <div className="p-6 pt-0">
//               <button
//                 data-ripple-light="true"
//                 type="button"
//                 className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//               >
//                 Read More
//               </button>
//             </div>
//           </div>
//           ))}

//         </div>
//       </div>
    
//   )
// }

// export default ProjectCard
