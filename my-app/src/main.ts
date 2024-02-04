import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



platformBrowserDynamic().bootstrapModule(AppModule)
.catch((err) => console.error(err));

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// bootstrapApplication(AppComponent, appConfig)