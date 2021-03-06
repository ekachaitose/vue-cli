import axios from 'axios'
const token = localStorage.getItem('token') || ''
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'authorization': token
  }
})
export default axiosInstance