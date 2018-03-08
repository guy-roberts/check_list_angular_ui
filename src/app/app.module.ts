import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuditTypeListComponent } from './audit-type-list/audit-type-list.component';
import { AuditTypeDetailComponent } from './audit-type-detail/audit-type-detail.component';

import { JsonApiModule } from 'angular2-jsonapi';
import { Datastore } from '../services/datastore';

@NgModule({
  declarations: [
    AppComponent,
    AuditTypeListComponent,
    AuditTypeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonApiModule
  ],
  providers: [Datastore],
  bootstrap: [AppComponent]
})
export class AppModule { }
