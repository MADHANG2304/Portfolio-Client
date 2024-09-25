import axios from 'axios'

const API = "https://66e526e25cc7f9b6273c6b87.mockapi.io/"


const getProjects = () => axios.get(`${API}/register`)
const getProjectsId = (id) => axios.get(`${API}/register/${id}`)
const addProject = (projectdata) => axios.post(`${API}/register`,projectdata)
const editProject = (id, projectdata) => axios.put(`${API}/register/${id}`,projectdata)
const deleteProject = (id) => axios.delete(`${API}/register/${id}`)

export {getProjects, getProjectsId, addProject, editProject, deleteProject}
