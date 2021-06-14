import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOriginFileComponent } from './my-origin-file.component';

describe('MyOriginFileComponent', () => {
  let component: MyOriginFileComponent;
  let fixture: ComponentFixture<MyOriginFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOriginFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOriginFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
