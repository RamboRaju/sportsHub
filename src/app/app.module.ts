import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PlayerProfileComponent } from './pages/player-profile/player-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListPageComponent,
    PlayerProfileComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
