import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PlayerProfileComponent } from './pages/player-profile/player-profile.component';



const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'listPage/:sport', component: ListPageComponent},
{ path: 'profile/:lastName', component: PlayerProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
