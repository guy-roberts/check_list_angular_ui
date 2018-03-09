import { AuditType } from '../../models/audit_type.model';
import { Component, OnInit } from '@angular/core';
import { Datastore } from '../../services/datastore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-audit-type-detail',
  templateUrl: './audit-type-detail.component.html',
  styleUrls: ['./audit-type-detail.component.css']
})


export class AuditTypeDetailComponent implements OnInit {
  audit_type: AuditType;
  audit_type_id: string;
  route: ActivatedRoute;

  constructor(private datastore: Datastore, route: ActivatedRoute) {
    this.audit_type_id = route.snapshot.params['id'];
    this.route = route;
  }

  ngOnInit() {
    // Get the id from the route, fetch the info about this audit_type
    this.getAuditType(this.audit_type_id);
  }
  getAuditType(id) {
    this.datastore.findRecord(AuditType, id).subscribe(
      (audit_type: AuditType) => this.audit_type = audit_type
    );
  }
}
