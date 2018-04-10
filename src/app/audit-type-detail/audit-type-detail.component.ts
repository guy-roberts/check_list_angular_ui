import { AuditType } from '../../models/audit_type.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Datastore } from '../../services/datastore';
import { ActivatedRoute } from '@angular/router';
import { DragulaService } from 'ng2-dragula';
import { AvailableComponentTypes } from '../../models/available_component_type.model';
import { AuditTypeComponent } from '../../models/audit_type_component.model';
import { JsonApiDatastore } from 'angular2-jsonapi';

import { JsonApiQueryData } from 'angular2-jsonapi';

@Component({
  selector: 'app-audit-type-detail',
  templateUrl: './audit-type-detail.component.html',
  styleUrls: ['./audit-type-detail.component.css']
})

export class AuditTypeDetailComponent implements OnInit, OnDestroy {

  audit_type: AuditType;
  audit_type_id: string;
  dragularService: DragulaService;
  route: ActivatedRoute;
  available_component_types: any;

  constructor(private datastore: Datastore, route: ActivatedRoute, private dragulaService: DragulaService) {
    this.audit_type_id = route.snapshot.params['id'];
    this.route = route;
    this.dragularService = dragulaService;

    this.dragulaService.setOptions('basket', {
      accepts: function (el: Element, target: Element, source: Element, sibling: Element) {
        return (target.className.includes('destination'));
      }
    });
    // Get the id from the route, fetch the info about this audit_type
    this.getAuditType(this.audit_type_id);
    this.getAvailableComponents();
  }

  ngOnInit() {
    this.dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    this.dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    this.dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    this.dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });
  }

  ngOnDestroy() {
    this.dragulaService.destroy('basket');
  }

  getAuditType(id) {
    this.datastore.findRecord(AuditType, id, {include: 'audit_type_components', sort: 'position'}).subscribe(
      (audit_type: AuditType) => {
        this.audit_type = audit_type;

        this.getAvailableComponents();

        // Sort by position
        this.audit_type.audit_type_components = this.audit_type.audit_type_components.sort((a, b) => {
          if (a.position < b.position) {
            return -1;
          } else if (a.position > b.position) {
            return 1;
          } else {
            return 0;
          }
        });
      }
    );
  }

  getAvailableComponents() {
    this.datastore.findAll(AvailableComponentTypes, {
    }).subscribe(
      (available_component_types: JsonApiQueryData<AvailableComponentTypes>) => {
        const newOnes: Array<AuditTypeComponent> = [];
        for (const type of available_component_types.getModels()) {
          const newType = this.datastore.createRecord(AuditTypeComponent, {
            title: type.title,
            position: 999,
            audit_type: this.audit_type,
            available_component_type: type
          });
          /* this.audit_type is not in scope */
          newOnes.push(newType);
        }
        this.available_component_types = newOnes;
      }
    );
  }

  reorderComponents() {
    console.log('reorderComponents');
    for (const item in this.audit_type.audit_type_components) {
      this.audit_type.audit_type_components[item].position = item;
      this.audit_type.audit_type_components[item].save().subscribe(
        (result: any) => {
          console.log('Success to save a position');

        },
        (result: any) => {
          console.log('Failed to save a position');
        }
      );
    }
  }

  // Dragular functions to show which element has moved

  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

  private onDrag(args) {
    let [e, el] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args) {
    let [e, el] = args;

    this.addClass(e, 'ex-moved');
    this.reorderComponents();
  }

  private onOver(args) {
    let [e, el, container] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args) {
    let [e, el, container] = args;
    this.removeClass(el, 'ex-over');
  }
}

