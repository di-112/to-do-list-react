import * as axios from 'axios'

const dataBase = 'https://todolist-7b978-default-rtdb.firebaseio.com'

const API = {
   getNodes: () =>{
     return axios.get(`${dataBase}/nodes.json`).then((response)=>response.data)
   },

   addNode: (node) => { 
      return axios.post(`${dataBase}/nodes.json`, node)
   },

   removeNode: (id) => {
      return axios.delete(`${dataBase}/nodes/${id}.json`) 
   }
}

export default API