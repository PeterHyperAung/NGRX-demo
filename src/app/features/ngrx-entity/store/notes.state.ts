import { createEntityAdapter, EntityState } from '@ngrx/entity';

export type Note = {
  id: number;
  title: string;
  note: string;
};

export interface NoteState extends EntityState<Note> {}

export const noteAdapter = createEntityAdapter<Note>();

export const initialState = noteAdapter.getInitialState();
