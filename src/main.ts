import { bootstrap }    from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { HTTP_PROVIDERS,XHRBackend } from '@angular/http';
import { InMemoryBackendService,SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './app/in-memory-data.service';
if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  {provide:XHRBackend,useClass:InMemoryBackendService},
  {provide:SEED_DATA,useClass:InMemoryDataService}
]);
