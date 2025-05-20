import { Component, OnInit } from '@angular/core';
import { Note, NoteState } from '../../store/notes.state';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { selectAllNotes } from '../../store/notes.selector';
import { EntityState } from '@ngrx/entity';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NotesActions } from '../../store/notes.action';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-ngrx-entity',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule, CommonModule],
  templateUrl: './ngrx-entity.component.html',
  styleUrl: './ngrx-entity.component.css',
})
export class NgrxEntityComponent implements OnInit {
  noteForm!: FormGroup;
  notes$: Observable<Note[]> = of([]);
  constructor(
    private store: Store<EntityState<Note>>,
    private fb: FormBuilder
  ) {
    this.noteForm = this.fb.group({
      text: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.notes$ = this.store.select(selectAllNotes);
  }

  onSubmit() {
    if (this.noteForm.valid) {
      const note = {
        id: new Date().getTime(),
        ...this.noteForm.value,
      } as Note;
      this.store.dispatch(NotesActions.addNote({ note }));
      console.log('Submitted Note:', this.noteForm.value);
    } else {
      this.noteForm.markAllAsTouched();
    }
  }

  update(note: Note) {
    const update: Update<Note> = {
      id: note.id,
      changes: {
        text: window.prompt('Update Note', note.text) || note.text,
      },
    };

    this.store.dispatch(NotesActions.updateNote({ update }));
  }

  delete(note: Note) {
    this.store.dispatch(NotesActions.removeNote({ note }));
  }
}
