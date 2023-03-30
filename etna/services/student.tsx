// import console from 'console'
import { api } from './requete'

const fecthStudent = async () => {
  return await api.get('/api/students/').then((response) => response.data)
}

const updateStudent = async (data) => {
  return await api.put('/api/student/', { data }).then(response => console.log(response.data))
}

const fecthStudentbyID = async (login: string) => {
  return await api.get('/api/student/' + login).then((response) => response.status)
}

export {
  fecthStudent,
  fecthStudentbyID,
  updateStudent
}
