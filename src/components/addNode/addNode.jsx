import React from 'react'
import { Field, reduxForm } from 'redux-form'

const AddNode = (props) => {
   return (
      <form className='addNode' onSubmit={props.handleSubmit}>
         <Field className='form-control' component='input' name='node' changeAlert={props.changeAlert} autoFocus/>
         <button className='btn btn-success' type='submit'>Add Task</button>
      </form>
   )
}

const AddNodeForm = reduxForm({form: 'addNodeForm'})(AddNode)

export default AddNodeForm