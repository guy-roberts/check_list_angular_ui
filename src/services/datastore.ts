import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuditType, AvailableComponents } from '../models/audit_type.model';
import { AuditTypeComponent } from '../models/audit_type_component.model';

import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';

const config: DatastoreConfig = {
  baseUrl: 'http://localhost:3000/check_list_engine/api/v1/',
  models: {
    audit_type: AuditType,
    available_component: AvailableComponents,
    audit_type_component: AuditTypeComponent
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

  constructor(http: Http) {
    super(http);
  }

}
