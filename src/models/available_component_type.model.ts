import { JsonApiModelConfig, JsonApiModel, Attribute } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'available_component_types'
})
export class AvailableComponentTypes extends JsonApiModel {
  @Attribute()
  title: string;
  @Attribute()
  has_photo: boolean;
}
