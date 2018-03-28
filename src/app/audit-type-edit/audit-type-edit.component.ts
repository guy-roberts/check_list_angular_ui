import { AuditTypeComponent } from '../../models/audit_type_component.model';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-audit-type-edit',
  templateUrl: './audit-type-edit.component.html',
  styleUrls: ['./audit-type-edit.component.css']
})
export class AuditTypeEditComponent implements OnInit {

  inEditMode: boolean;

  @Input() audit_type_component: AuditTypeComponent;
  constructor() {
  }
  ngOnInit() {
    this.inEditMode = false;
  }
  startEditing() {
    this.inEditMode = true;
  }
  cancel() {
    this.inEditMode = false;
  }
  iconName() {

    switch (this.audit_type_component.name_of_component_type) {
      case 'Title':
        return 'payment';
      case 'Choices':
        return 'list';
      case 'Text':
        return 'subject';
      case 'Date':
        return 'today';
      case 'Signature':
        return 'gesture';
      case 'Photo':
        return 'camera';
      case 'Address':
        return 'place';
      case 'Yes / No':
        return 'hdr-strong';
      default:
        return 'payment';
    }
  }

  showChoices() {
    if (this.audit_type_component.name_of_component_type === 'Choices') {
      return true;
    } else {
      return false;
    }
  }
  saveComponentChanges(component: AuditTypeComponent) {
      component.save().subscribe(
        (result: any) => {
          this.inEditMode = false;
        },
        (result: any) => {
          alert('Failed to save an AuditType');
        }
      );
  }
}
