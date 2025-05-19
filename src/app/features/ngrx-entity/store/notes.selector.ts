import { createFeature, createFeatureSelector } from '@ngrx/store';
import { noteAdapter, NoteState } from './notes.state';

export const selectNotesState = createFeatureSelector<NoteState>('notes');

const { selectAll, selectEntities, selectIds, selectTotal } =
  noteAdapter.getSelectors(selectNotesState);

export const selectAllNotes = selectAll;
export const selectNotesEntities = selectEntities;
export const selectNotesIds = selectIds;
export const selectNotesTotal = selectTotal;
