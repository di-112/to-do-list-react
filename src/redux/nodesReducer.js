import * as axios from 'axios'

const ADD_NODE = 'ADD_NODE'
const REMOVE_NODE = 'REMOVE_NODE'
const SET_NODES = 'SET_NODES'
const CHANGE_ALERT = 'CHANGE_ALERT'

const dataBase = 'https://todolist-7b978-default-rtdb.firebaseio.com'

const initialsState = {
   nodes: [],
   loading: false,
   alert: {show: false, type: ''}
}

const nodesReducer = (state=initialsState,action) => {
   switch(action.type){
      case SET_NODES: if(!action.nodes) return {...state, nodes: []}
      return ({
         ...state,
         nodes: [...Object.keys(action.nodes).map(key=>{
            return {
               ...action.nodes[key],
               id: key
            }
         })]
      })
      case CHANGE_ALERT: return ({
         ...state,
         alert: {...state.alert, show: action.alert.show, type: action.alert.type}
      })
      default: return {...state}
   }
}

export default nodesReducer

export const setNodes = (nodes) => ({type: SET_NODES, nodes}) 

export const changeAlert = (alert) => ({type: CHANGE_ALERT, alert})


export const getNodes = () => (dispatch) => {
   axios.get(`${dataBase}/nodes.json`).then((response)=>{
      dispatch(setNodes(response.data))
   })
}

export const addNode = (node) => (dispatch) => {
   if(!node.title)  dispatch(changeAlert({type: 'warning', show: true}))
   else axios.post(`${dataBase}/nodes.json`, node).then((response)=>{
      dispatch(changeAlert({type: 'add', show: true}))
      dispatch(getNodes())
   })
}

export const removeNode = (id) => (dispatch) => {
   axios.delete(`${dataBase}/nodes/${id}.json`).then((response)=>{
      dispatch(changeAlert({type: 'remove', show: true}))
      dispatch(getNodes())
   })
}