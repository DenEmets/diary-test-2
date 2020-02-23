import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventComponent} from './event/event.component';
import {MapComponent} from './map/map.component';
import {HomePageComponent} from './home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'event', component: EventComponent },
  { path: 'map', component: MapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
