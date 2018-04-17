import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditTypeNewComponent } from './audit-type-new.component';

describe('AuditTypeNewComponent', () => {
  let component: AuditTypeNewComponent;
  let fixture: ComponentFixture<AuditTypeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditTypeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditTypeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
