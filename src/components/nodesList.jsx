import React from 'react'

const NodesList = ({nodes, removeNode}) => {
   return (
      <ul className='nodesList'> 
       {nodes.map((node, index)=> (
         <li className='nodesList__node node' key={index}>
            <div>
            <strong className='node__title'>{node.title}</strong> 
            <small className='node__date'>{node.date}</small> 
            </div>
            <button onClick={()=>removeNode(node.id)}  type="button" className="node__closeBtn close">&times;</button>
         </li>))}
      </ul>
   )
}

export default NodesList