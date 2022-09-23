import axios from 'axios'

const api = axios.create({
  baseURL: 'http://18.228.170.164:8082/',
})

export default api
