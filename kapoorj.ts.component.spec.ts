import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapoorj.TsComponent } from './kapoorj.ts.component';

describe('Kapoorj.TsComponent', () => {
  let component: Kapoorj.TsComponent;
  let fixture: ComponentFixture<Kapoorj.TsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kapoorj.TsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kapoorj.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
