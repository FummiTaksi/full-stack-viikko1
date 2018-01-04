import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'


const getAll = () => {
    return axios.get(baseUrl);
  }
  
const create = (newObject) => {
    return axios.post(baseUrl, newObject);
}

const deletePerson = (personId) => {
    const url = baseUrl + '/' + personId
    console.log("URL",url);
    return axios.delete(url);
}

 export default { getAll, create, deletePerson }