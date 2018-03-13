import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuditTypeListComponent } from './audit-type-list/audit-type-list.component';
import { AuditTypeDetailComponent } from './audit-type-detail/audit-type-detail.component';
import { AvailableComponentsComponent } from './available-components/available-components.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DragulaModule } from 'ng2-dragula';
import { JsonApiModule } from 'angular2-jsonapi';
import { Datastore } from '../services/datastore';
import { AuditTypeEditComponent } from './audit-type-edit/audit-type-edit.component';


const appRoutes: Routes = [
  { path: 'audit_type/:id',      component: AuditTypeDetailComponent },
  {
    path: 'audit_types',
    component: AuditTypeListComponent,
    data: { title: 'List of Audit Types' }
  },
  { path: '',
    redirectTo: '/audit_types',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AuditTypeListComponent,
    AuditTypeDetailComponent,
    AvailableComponentsComponent,
    AuditTypeEditComponent,
    PageNotFoundComponent,
    AuditTypeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JsonApiModule,
    DragulaModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [Datastore],
  bootstrap: [AppComponent]
})


export class AppModule { }
