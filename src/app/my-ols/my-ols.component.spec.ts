import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOlsComponent } from './my-ols.component';

describe('MyOlsComponent', () => {
  let component: MyOlsComponent;
  let fixture: ComponentFixture<MyOlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
