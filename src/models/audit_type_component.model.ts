import { JsonApiModelConfig, JsonApiModel, Attribute, BelongsTo } from 'angular2-jsonapi';

import { AuditType } from './audit_type.model';

@JsonApiModelConfig({
  type: 'audit_type_component'
})
export class AuditTypeComponent  extends JsonApiModel {

  @Attribute()
  title: string;

  @Attribute()
  position: string;

  @Attribute()
  help_text: string;

  @Attribute()
  choices: string;

  @Attribute()
  has_image: boolean;

  @Attribute()
  is_mandatory: boolean;

  @BelongsTo()
  audit_type: AuditType;
}
