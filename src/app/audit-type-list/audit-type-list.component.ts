import { Component, OnInit } from '@angular/core';

import { JsonApiQueryData } from 'angular2-jsonapi';
import { Datastore } from '../../services/datastore';
import { AuditType } from '../../models/audit_type.model';


@Component({
  selector: 'app-audit-type-list',
  templateUrl: './audit-type-list.component.html',
  styleUrls: ['./audit-type-list.component.css']
})
export class AuditTypeListComponent implements OnInit {
  audit_types: any;
  selectedAuditType: AuditType;

  constructor(private datastore: Datastore) { }

  ngOnInit() {
    this.getAuditTypes();
  }

  onSelect(audit_type: AuditType): void {
    this.selectedAuditType = audit_type;
  }

  getAuditTypes() {
    this.datastore.findAll(AuditType, {
      page: { size: 10, number: 1 },
      filter: {
        title: 'My Audit',
      },
    }).subscribe(
      (audit_types: JsonApiQueryData<AuditType>) => {
        this.audit_types = audit_types.getModels();
      }
    );
  }

}
