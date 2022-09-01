import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { INote } from '../../models/note.model';

export const notesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://todolist-7b978-default-rtdb.firebaseio.com',
  }),
  reducerPath: 'notes/api',
  tagTypes: ['note'],
  endpoints: build => ({
    getNotes: build.query<INote[], void>({
      query: () => ({
        url: '/nodes.json',
      }),
      providesTags: ['note'],
      transformResponse: nodes => [...Object.keys(nodes).map(key => ({
        ...nodes[key],
        id: key,
      }))].reverse(),
    }),
    addNote: build.mutation<INote[], INote>({
      query: note => ({
        url: '/nodes.json',
        method: 'POST',
        body: note,
      }),
      invalidatesTags: ['note'],
    }),
    removeNote: build.mutation<INote[], string>({
      query: id => ({
        url: `/nodes/${id}.json`,
        method: 'DELETE',
      }),
      invalidatesTags: ['note'],
    }),
  }),
})
