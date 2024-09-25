import React, { useEffect, useState } from 'react'
import { getProjects } from '../services/api'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {

    const [projectData, setProjectData] = useState(null)

    const fetchprojects = async () => {
        try {
            const {data} = await getProjects()
            setProjectData(data)
        } 
        catch (error) {
            console.log(error)
        }

    }
    
    
    useEffect(() => {
        fetchprojects()
    },[])
    
    console.log(projectData)


    if(!projectData || projectData.length === 0)
    {
        console.log("Not Available")
    }

  return (
    <>
      <div className="w-full h-full flex flex-row flex-wrap gap-8 justify-center items-center">
        {projectData.map((data,index) => 
            <ProjectCard key = {index} title = {data.title} desc = {data.desc}  cover = {data.coverimg} id = {data.id} fetchprojects = {data.fetchprojects} link = {data.link} />
        )
        
        }
    
        
      </div>
    </>
  )
}

export default Projects
