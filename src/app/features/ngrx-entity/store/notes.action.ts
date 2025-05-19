import { createActionGroup, props } from '@ngrx/store';
import { Note } from './notes.state';
import { Update } from '@ngrx/entity';

export const NotesActions = createActionGroup({
  source: 'Notes',
  events: {
    'Add Note': props<{ note: Note }>(),
    'Remove Note': props<{ note: Note }>(),
    'Update Note': props<Update<Note>>(),
  },
});
