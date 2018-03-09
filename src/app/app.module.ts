import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuditTypeListComponent } from './audit-type-list/audit-type-list.component';
import { AuditTypeDetailComponent } from './audit-type-detail/audit-type-detail.component';
import { AvailableComponentsComponent } from './available-components/available-components.component';

import { DragulaModule } from 'ng2-dragula';

import { JsonApiModule } from 'angular2-jsonapi';
import { Datastore } from '../services/datastore';

@NgModule({
  declarations: [
    AppComponent,
    AuditTypeListComponent,
    AuditTypeDetailComponent,
    AvailableComponentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonApiModule,
    DragulaModule
  ],
  providers: [Datastore],
  bootstrap: [AppComponent]
})
export class AppModule { }
