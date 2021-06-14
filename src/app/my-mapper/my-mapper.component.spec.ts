import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMapperComponent } from './my-mapper.component';

describe('MyMapperComponent', () => {
  let component: MyMapperComponent;
  let fixture: ComponentFixture<MyMapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
