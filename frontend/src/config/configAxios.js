import axios from 'axios'

const baseURL = 'http://localhost:4000/api'

const clientHTTP = axios.create({ baseURL })

export default clientHTTP
