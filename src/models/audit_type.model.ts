import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany } from 'angular2-jsonapi';

import { AuditTypeComponent } from './audit_type_component.model';

@JsonApiModelConfig({
  type: 'audit_types'
})
export class AuditType extends JsonApiModel {

  @Attribute()
  title: string;

  @HasMany()
  audit_type_components: AuditTypeComponent[];
}

@JsonApiModelConfig({
  type: 'available_components'
})
export class AvailableComponents extends JsonApiModel {

  @Attribute()
  title: string;
  has_photo: boolean;
}
