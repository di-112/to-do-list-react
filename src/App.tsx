import React from 'react'
import './scss/App.scss';

import { Redirect, Route } from 'react-router-dom';
import Header from './components/Header';
import NotesList from './components/NotesList';
import Information from './components/Information';
import Loader from './components/Loader';
import { notesApi } from './store/notes/notes.api';
import AddNote from './components/AddNote';

const App = () => {
  const { data: notes = [], isLoading } = notesApi.useGetNotesQuery()

  if (isLoading) {
    return (
      <div className="wrapper">
        <Header />
        <Loader />
      </div>
    )
  }

  return (
    <div className="wrapper">
      <Header />
      <Redirect to="/main" />
      <Route
        path="/main"
        render={() => (
          <>
            <AddNote />
            <NotesList notes={notes} />
          </>
        )}
      />
      <Route path="/info" render={() => <Information />} />
    </div>
  );
}

export default App
