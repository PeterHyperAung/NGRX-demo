import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxEntityComponent } from './ngrx-entity.component';

describe('NgrxEntityComponent', () => {
  let component: NgrxEntityComponent;
  let fixture: ComponentFixture<NgrxEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxEntityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
