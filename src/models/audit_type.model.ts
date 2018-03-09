import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'audit_types'
})
export class AuditType extends JsonApiModel {

  @Attribute()
  title: string;

  @Attribute()
  has_photo: boolean;
}

@JsonApiModelConfig({
  type: 'available_components'
})
export class AvailableComponents extends JsonApiModel {

  @Attribute()
  title: string;
  has_photo: boolean;
}
