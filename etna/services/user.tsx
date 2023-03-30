// import console from 'console'
import { api } from './requete'

async function createUser(data) {
  return await api.post('/user/auth/', { data })
}

export default createUser
