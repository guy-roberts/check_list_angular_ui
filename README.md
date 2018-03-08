# A Check List UI 
## Written with Angular

This is a way of visually designing check list processes and then managing the results of these lists being completed.

To make it more concrete,  think about a landlord who needs to send somebody out to inspect some rental properties.  She
can design a Check List (or Audit) with sections for the address, a description of the state of the house, a set of 
Yes / No fields to show if the gas boiler has been serviced, insurance is up to date, a photograph of any repairs needed and a 
signature from a tenant.

The landlord can design this check list and then assign a blank copy of it to the inspector person, who can then use a
moile app to send the results to the server.

## How to use it

The connection to the server is defined in datastore.ts

```typescript
const config: DatastoreConfig = {
  baseUrl: 'http://localhost:3000/check_list_engine/api/v1/',
  models: {
    audit_types: AuditType
  }
}
```

You'll need to run the rails server (link to repository?) and configure 
Rack::Cors.

To run the front end,

```
ng serve
```

## Using this UI from the Rails server app
The easiest way to see front and back end working is to build this angular project
and then to copy the contents of the dist directory into the Rails public directory.
The angular index.html will then be served up.

Doing this avoids the need to use any JS/CSS/HTML on the Rails side, instead using
the angular tools to minify and deliver all of the front end code.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

