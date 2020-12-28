import * as axios from 'axios'

const SET_NODES = 'SET_NODES'
const CHANGE_ALERT = 'CHANGE_ALERT'
const CHANGE_LOADIND = 'CHANGE_LOADIND'

const dataBase = 'https://todolist-7b978-default-rtdb.firebaseio.com'

const initialsState = {
   nodes: [],
   isLoading: false,
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
      case CHANGE_LOADIND: return ({
         ...state,
         isLoading: action.isLoading
      })
      default: return {...state}
   }
}

export default nodesReducer

export const setNodes = (nodes) => ({type: SET_NODES, nodes}) 

export const changeAlert1 = (alert) => ({type: CHANGE_ALERT, alert})

export const changeLoading = (isLoading) => ({type: CHANGE_LOADIND, isLoading})

let timeout;

export const changeAlert = (alert) => (dispatch) => {
   if(timeout)clearTimeout(timeout)
   dispatch(changeAlert1(alert))
   timeout=setTimeout(() => {
      dispatch(changeAlert1({type: '', show: false}))
  }, 55000);
}


export const getNodes = () => (dispatch) => {
   dispatch(changeLoading(true))
   axios.get(`${dataBase}/nodes.json`).then((response)=>{
      dispatch(changeLoading(false))
      dispatch(setNodes(response.data))
   })
}

export const addNode = (node) => (dispatch) => {
   if(!node.title)  dispatch(changeAlert({type: 'warning', show: true}))
   else {
      dispatch(changeLoading(true))
      axios.post(`${dataBase}/nodes.json`, node).then((response)=>{
      dispatch(changeAlert({type: 'add', show: true}))
      dispatch(getNodes())
      dispatch(changeLoading(false))
   })}
}

export const removeNode = (id) => (dispatch) => {
   axios.delete(`${dataBase}/nodes/${id}.json`).then((response)=>{
      dispatch(changeAlert({type: 'remove', show: true}))
      dispatch(getNodes())
   })
}