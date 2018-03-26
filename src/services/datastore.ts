import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuditType } from '../models/audit_type.model';
import { AuditTypeComponent } from '../models/audit_type_component.model';

import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';

const config: DatastoreConfig = {
  baseUrl: 'http://localhost:3000/check_list_engine/api/',
  models: {
    audit_type: AuditType,
    audit_type_components: AuditTypeComponent
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

  constructor(http: Http) {
    super(http);
  }

}
