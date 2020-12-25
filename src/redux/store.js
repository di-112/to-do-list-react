import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import nodesReducer from "./nodesReducer";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
   data: nodesReducer,
   form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store