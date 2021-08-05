import { WebcamComponent } from './component/webcam/webcam.component';
import { WeatherComponent } from './component/weather/weather.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '', component: HomeComponent,
}, {
  path: 'contact', component: ContactComponent
}, {
  path: 'weather', component: WeatherComponent
}, {
  path: 'webcam', component: WebcamComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
