import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'audit_types'
})
export class AuditType extends JsonApiModel {

  @Attribute()
  title: string;

}
