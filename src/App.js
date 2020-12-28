import './scss/App.scss';
import { connect } from 'react-redux';
import { addNode, changeAlert, getNodes, removeNode } from './redux/nodesReducer';
import { useEffect } from 'react';
import Header from './components/header/header';
import NodesList from './components/nodesList/nodesList';
import Alert from './components/alert/alert';
import AddNodeForm from './components/addNode/addNode';
import { compose } from 'redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import Information from './components/information/Information';
import Loader from './components/loader/loader';

function App(props) {
  
  useEffect(()=>{
    props.getNodes()
  }, [])

  useEffect(()=>{
    if(props.location.pathname==='/main')props.changeAlert({show:false, type: ''})
  },[props.location.pathname])

  const onClockAddNode = (formData) =>{

    let date = new Date()
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
   

    props.addNode(
      {
        title:formData.node,
        date: day + '.' + monthIndex + '.' + year + '_' + hours + ':' + minutes
      })
  }
  if(props.isLoading){ console.log('hello') ;return (
    <div className="wrapper">
      <Header/>
      <Loader />
    </div>
  )}

  return (
    <div className="wrapper">
      <Header/>
      <Redirect to='/main'/>
      <Route path='/main'  render={()=>(
        <>
          {(props.alert.show) && <Alert alert={props.alert} changeAlert={props.changeAlert}/>}
          <AddNodeForm onSubmit={onClockAddNode} {...props}/>
          <NodesList nodes={props.nodes} removeNode={props.removeNode} changeAlert={props.changeAlert}/>
        </>)} 
      />
      <Route path='/info'  render={()=><Information/>} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  nodes: state.data.nodes,
  alert: state.data.alert,
  isLoading: state.data.isLoading
})

export default compose(
  withRouter,
  connect(mapStateToProps, {getNodes,removeNode, changeAlert, addNode})
)(App)

