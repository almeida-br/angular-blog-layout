import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorCardListComponent } from './editor-card-list.component';

describe('EditorCardListComponent', () => {
  let component: EditorCardListComponent;
  let fixture: ComponentFixture<EditorCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorCardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
