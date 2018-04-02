import { JsonApiModelConfig, JsonApiModel, Attribute, BelongsTo } from 'angular2-jsonapi';

import { AuditType } from './audit_type.model';

@JsonApiModelConfig({
  type: 'audit_type_components'
})
export class AuditTypeComponent  extends JsonApiModel {

  @Attribute()
  title: string;

  @Attribute()
  help_text: string;

  @Attribute()
  choices: string;

  @Attribute()
  has_image: boolean;

  @Attribute()
  is_mandatory: boolean;

  @Attribute()
  position: string;

  @BelongsTo()
  audit_type: AuditType;
}
