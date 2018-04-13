import { JsonApiQueryData } from 'angular2-jsonapi';
import { Datastore } from '../../services/datastore';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuditTypeComponent } from '../../models/audit_type_component.model';


@Component({
  selector: 'app-audit-type-edit',
  templateUrl: './audit-type-edit.component.html',
  styleUrls: ['./audit-type-edit.component.css']
})
export class AuditTypeEditComponent implements OnInit {

  inEditMode: boolean;

  @Input() audit_type_component: AuditTypeComponent;

  /* This might be too complicated, its a way to tell the parent AuditTypeDetailComponent
   * that this AuditTypeEditComponent has been deleted.
   * It would be simpler if the delete button was in the parent list
   * */
  @Output() iHaveBeenDeleted = new EventEmitter();

  constructor(private datastore: Datastore) {
  }

  ngOnInit() {
    if (typeof(this.audit_type_component.help_text) === 'undefined') {
      this.inEditMode = true;
    } else {
      this.inEditMode = false;
    }
  }
  startEditing() {
    this.inEditMode = true;
  }
  cancel() {
    this.inEditMode = false;
  }
  deleteComponent(doomedComponent) {
    this.datastore.deleteRecord(AuditTypeComponent, doomedComponent.id).subscribe(() => {
        /* Generate a message to the parent AuditTypeEditComponent */
        this.iHaveBeenDeleted.next();
      },
        (result: any) => {
          alert('Failed to delete an AuditTypeComponent');
      }
    );
  }

  iconName(name) {
    switch (name) {
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
