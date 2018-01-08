import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'


const getAll = () => {
    return axios.get(baseUrl);
  }
  
const create = (newObject) => {
    return axios.post(baseUrl, newObject);
}

const editPerson = (person) => {
    const personUrl = baseUrl + "/" + person.id;
    return axios.put(personUrl, person)
}

const deletePerson = (personId) => {
    const url = baseUrl + '/' + personId
    return axios.delete(url);
}

 export default { getAll, create, deletePerson, editPerson }