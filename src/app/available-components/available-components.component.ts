import { Component, OnInit } from '@angular/core';
import { AvailableComponentTypes } from '../../models/available_component_type.model';
import { JsonApiQueryData } from 'angular2-jsonapi';
import { Datastore } from '../../services/datastore';

@Component({
  selector: 'app-available-component-types',
  templateUrl: './available-components.component.html',
  styleUrls: ['./available-components.component.css']
})
export class AvailableComponentsComponent implements OnInit {
  available_component_types: any;

  constructor(private datastore: Datastore) { }

  ngOnInit() {
    this.getAvailableComponents();
  }

  getAvailableComponents() {
    this.datastore.findAll(AvailableComponentTypes, {
    }).subscribe(
      (available_component_types: JsonApiQueryData<AvailableComponentTypes>) => {
        this.available_component_types = available_component_types.getModels();
      }
    );
  }
}
