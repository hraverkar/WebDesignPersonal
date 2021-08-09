import { MaterialModule } from './module/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './component/menu/menu.component';
import { ContactComponent } from './component/contact/contact.component';
import { WeatherComponent } from './component/weather/weather.component';
import { WebcamModule } from 'ngx-webcam';
import { WebcamComponent } from './component/webcam/webcam.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularCesiumModule, PolygonsEditorService } from 'angular-cesium';
import { AngularCesiumWidgetsModule } from 'angular-cesium';
import { MapComponent } from './component/map/map.component';
import { ResumeComponent } from './component/resume/resume.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContactComponent,
    WeatherComponent,
    WebcamComponent,
    MapComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    WebcamModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule
  ],
  providers: [PolygonsEditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
