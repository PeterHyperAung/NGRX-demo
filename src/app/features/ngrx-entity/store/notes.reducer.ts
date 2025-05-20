import { createReducer, on } from '@ngrx/store';
import { initialState, noteAdapter } from './notes.state';
import { NotesActions } from './notes.action';

export const notesReducer = createReducer(
  initialState,
  on(NotesActions.addNote, (state, { note }) => {
    return noteAdapter.addOne(note, state);
  }),
  on(NotesActions.removeNote, (state, { note }) => {
    return noteAdapter.removeOne(note.id, state);
  }),
  on(NotesActions.updateNote, (state, { update }) => {
    return noteAdapter.updateOne(update, state);
  })
);
