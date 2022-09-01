import { configureStore } from '@reduxjs/toolkit'
import { notesApi } from './notes/notes.api';

const store = configureStore({
  reducer: {
    [notesApi.reducerPath]: notesApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(notesApi.middleware),
})

export default store

export type IRootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
