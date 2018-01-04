import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'


const getAll = () => {
    return axios.get(baseUrl);
  }
  
const create = (newObject) => {
    return axios.get(baseUrl);
}

 export default { getAll, create }