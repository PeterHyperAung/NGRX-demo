import { createEntityAdapter, EntityState } from '@ngrx/entity';

export type Note = {
  id: number;
  text: string;
};

export interface NoteState extends EntityState<Note> {}

export const noteAdapter = createEntityAdapter<Note>();

export const initialState = noteAdapter.getInitialState();
