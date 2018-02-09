import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes = [
  { path: 'user/:id', component: UserComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}