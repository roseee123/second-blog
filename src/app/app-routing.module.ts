import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';

import { from } from 'rxjs';
const routes: Routes = [{
  path: '', children: [
    { path: 'home', component: HomeComponent },
    { path: 'user', redirectTo: '/user', pathMatch: 'full' },
    // { path: '/user/signup', component: SignupComponent},
    // { path: '/user/login', component: LoginComponent },
    // { path: '/user/auth/logout', component: },
    // { path: '/article', component: },
    // { path: '/article/manage', component: },
    // { path: '/article/create', component: },
    // { path: '/article/{article_id}', component: },
    // { path: '/article/{article_id}/edit', component: },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ]
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
