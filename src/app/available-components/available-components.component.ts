import { Component, OnInit } from '@angular/core';
import { AvailableComponents } from '../../models/audit_type.model';
import { JsonApiQueryData } from 'angular2-jsonapi';
import { Datastore } from '../../services/datastore';

@Component({
  selector: 'app-available-components',
  templateUrl: './available-components.component.html',
  styleUrls: ['./available-components.component.css']
})
export class AvailableComponentsComponent implements OnInit {
  available_components: any;

  constructor(private datastore: Datastore) { }

  ngOnInit() {
    this.getAvailableComponents();
  }

  getAvailableComponents() {
    this.datastore.findAll(AvailableComponents, {
      page: { size: 10, number: 1 },
      filter: {
        title: 'Bla Bla',
      },
    }).subscribe(
      (available_components: JsonApiQueryData<AvailableComponents>) => {
        this.available_components = available_components.getModels();
      }
    );
  }

}
