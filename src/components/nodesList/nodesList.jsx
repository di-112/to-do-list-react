import React from 'react'

const imgBtnClose ='https://www.pngkit.com/png/full/967-9679106_wrong-environmental-defence-canada.png'

const NodesList = ({nodes, removeNode, changeAlert}) => {
   return (
      <ul className='nodesList'> 
       {nodes.map((node, index)=> (
         <li className='nodesList__node node' key={index}>
            <strong className='node__title'>{node.title}</strong> 
            <small className='node__date'>{node.date}</small> 
            <button onClick={()=>removeNode(node.id)}  type="button" class="node__closeBtn close">&times;</button>
         </li>))}
      </ul>
   )
}

export default NodesList