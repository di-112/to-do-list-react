import React, { useState } from 'react'
import moment from 'moment';
import { notesApi } from '../store/notes/notes.api';

const AddNote = () => {
  const [addNote] = notesApi.useAddNoteMutation()

  const [value, setValue] = useState('');

  const clickHAndler = async () => {
    await addNote({
      title: value,
      date: moment().format('DD.MM.YYYY'),
    })
    setValue('')
  }

  return (
    <div className="addNote">
      <input className="form-control" value={value} onChange={e => setValue(e.target.value)} />
      <div className="addBtn">
        <button className="btn btn-success" onClick={clickHAndler} type="submit">
          Add Task
        </button>
      </div>
    </div>
  )
}

export default AddNote
