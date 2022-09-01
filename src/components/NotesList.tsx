import React, { FC } from 'react'
import { INote } from '../models/note.model';
import { notesApi } from '../store/notes/notes.api';

interface INodeList {
  notes: INote[]
}

const NotesList: FC<INodeList> = ({ notes }) => {
  const [removeNote] = notesApi.useRemoveNoteMutation()

  return (
    <ul className="nodesList">
      {notes.map((note, index) => (
        <li className="nodesList__node node" key={index}>
          <div>
            <strong className="node__title">{note.title}</strong>
            <small className="node__date">{note.date}</small>
          </div>
          <button onClick={() => removeNote(note.id)} type="button" className="node__closeBtn close">&times;</button>
        </li>
      ))}
    </ul>
  )
}

export default NotesList
