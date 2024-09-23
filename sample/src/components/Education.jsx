import eduimg1 from '../assets/image/demo1.gif'
import eduimg2 from '../assets/image/demo2.gif'

const Education = () => {
  return (
    <>
      <div className='h-screen m-5 '>
        <div className='h-auto flex  items-start gap-2 m-5'>
          <div className='w-2/5 m-5  flex flex-col justify-end items-center text-4xl font-bold text-red-500 '>
            <u className='mb-3'>EDUCATION</u>
            <img src = {eduimg1}></img>
          </div>
          
          
          <div className=' w-3/4 m-10 '>
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
          <div className='w-2/5 m-5  flex flex-col justify-end items-center text-4xl font-bold text-red-500 '>
            <u className='mb-5'>EXPERIENCE</u>
            <img src= {eduimg2}></img>
          </div>
          
          
          <div className=' w-3/4 m-5 h-auto flex flex-col mt-40'>
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
