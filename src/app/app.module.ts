import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { EventComponent } from './event/event.component';
import {ListComponent} from './list/list.component';
import { EditListComponent } from './list/edit-list/edit-list.component';
import { DeleteListComponent } from './list/delete-list/delete-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        EventComponent,
        ListComponent,
        EditListComponent,
        DeleteListComponent,
        HomePageComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
