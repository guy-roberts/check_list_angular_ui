import { AuditTypeComponent } from '../../models/audit_type_component.model';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-audit-type-edit',
  templateUrl: './audit-type-edit.component.html',
  styleUrls: ['./audit-type-edit.component.css']
})
export class AuditTypeEditComponent implements OnInit {

  @Input() audit_type_component: AuditTypeComponent;
  constructor() { }

  ngOnInit() {
  }

}
