import { Component, Input, OnInit } from '@angular/core';
import { Datastore } from '../../services/datastore';
import { AuditType } from '../../models/audit_type.model';
import { Router } from '@angular/router';

import {JsonApiQueryData} from 'angular2-jsonapi';
import {AvailableComponentTypes} from '../../models/available_component_type.model';
import {AuditTypeComponent} from '../../models/audit_type_component.model';

@Component({
  selector: 'app-audit-type-new',
  templateUrl: './audit-type-new.component.html',
  styleUrls: ['./audit-type-new.component.css']
})

export class AuditTypeNewComponent implements OnInit {

  @Input() title: String;
  constructor(private datastore: Datastore, private router: Router) {
  }

  ngOnInit() {
  }
  saveChanges() {
    this.datastore.createRecord(AuditType, {
      title: this.title
    }).save().subscribe(
      (newAuditType: AuditType) => {
        console.log('Succcess saving new AuditType');
        /* Create the first component */

        this.datastore.findAll(AvailableComponentTypes, {
          filter: {
            title: 'Title',
          },
        }).subscribe(
          (available_component_types: JsonApiQueryData<AvailableComponentTypes>) => {
            const newOnes: Array<AuditTypeComponent> = [];
            if (available_component_types) {
              const availableTypes = available_component_types.getModels();
              const titleType = availableTypes[0];

              const newType = this.datastore.createRecord(AuditTypeComponent, {
                title: titleType.title,
                help_text: 'Add a title',
                position: 999,
                audit_type: newAuditType,
                available_component_type: titleType,
                name_of_component_type: titleType.title
              });
              newType.save().subscribe(
                (result: any) => {
                  this.router.navigate(['/']);
                },
                (result: any) => {
                  console.log('Failed to save a component for a new AuditType');
                  this.router.navigate(['/']);
                }
              );
            }
          }
        )
      },
      () => {
        console.log('Failure saving new AuditType');
      });
  }
}
