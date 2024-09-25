

const Education = () => {
  return (
    <>
      <div className=' m-5 bg-slate-200 rounded-md'>
        <div className='h-auto flex  items-start gap- m-5 '>
          <div className='w-2/5 m-5  flex flex-col justify-end items-center text-4xl font-bold '>
            <span className='border-b-2 pb-4 border-teal-custom'>EDUCATION</span>
            {/* <img src = {eduimg1} className=''></img> */}
          </div>
          
          
          <div className=' w-3/4 m-5 '>
            <h1 className='font-bold text-3xl mb-2 '>Sri Shakthi Institute of Engineering and Technology</h1>
            <h3 className='text-lg text-gray-500 mb-2'>Bachelor of Computer Science Engineering • Oct 2022 - Oct 2026</h3>
            <p className='text-lg text-gray-500 mb-5'>Grade: 8.17 CGPA</p>
            
            <h1 className='font-bold text-3xl mb-2'>Vigneshwar Vidhya Mandhir</h1>
            <h3 className='text-lg text-gray-500 mb-2'>Higher Education • Jun 2020 - Jun 2022</h3>
            <p className='text-lg text-gray-500 mb-5'>Grade: 86.7 %A</p>
            
            <h1 className='font-bold text-3xl mb-2'>Venkitaraj Matriculation School</h1>
            <h3 className='text-lg text-gray-500 mb-2'>Primary Education • Jun 2008 - Jun 2020</h3>
            <p className='text-lg text-gray-500'>Grade: 83.3 %</p>
          </div>
        </div>

        
        <div className='h-auto flex  items-start gap-2 m-5'>
          <div className='w-2/5 m-5  flex flex-col justify-end items-center text-4xl font-bold  '>
          <span className='border-b-2 pb-4 border-teal-custom'>EXPERIENCE</span>
            {/* <img src= {eduimg2}></img> */}
          </div>
          
          
          <div className=' w-3/4 m-5 h-auto flex flex-col'>
            <h1 className='font-bold text-3xl mb-2'>CodSoft Technologies</h1>
            <h3 className='text-lg text-gray-500 mb-2'>Intern as Java Developer • June 2024 - July 2024</h3>
            <p className='text-lg text-gray-500 mb-5'>Collaborated with senior developers to understand the complex functionalities and completed assigned tasks</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Education
