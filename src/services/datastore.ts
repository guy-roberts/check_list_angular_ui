import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuditType } from '../models/audit_type.model';
import { AuditTypeComponent } from '../models/audit_type_component.model';
import { AvailableComponentTypes } from '../models/available_component_type.model';

import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';

const config: DatastoreConfig = {
  baseUrl: 'http://localhost:3000/check_list_engine/api/',
  models: {
    audit_type: AuditType,
    audit_type_components: AuditTypeComponent,
    available_component_types: AvailableComponentTypes
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

  constructor(http: Http) {
    super(http);
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
}
