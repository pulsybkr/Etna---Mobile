import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.16.31.3:3000/',
  timeout: 5000,
  headers: {
    accept: 'application/json'
  }
})
