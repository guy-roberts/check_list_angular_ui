import { AuditType } from '../../models/audit_type.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-audit-type-detail',
  templateUrl: './audit-type-detail.component.html',
  styleUrls: ['./audit-type-detail.component.css']
})


export class AuditTypeDetailComponent implements OnInit {
  @Input() audit_type: AuditType;

  constructor() { }

  ngOnInit() {
  }

}
