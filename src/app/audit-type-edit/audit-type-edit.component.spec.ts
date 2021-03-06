import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditTypeEditComponent } from './audit-type-edit.component';

describe('AuditTypeEditComponent', () => {
  let component: AuditTypeEditComponent;
  let fixture: ComponentFixture<AuditTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
