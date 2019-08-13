import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { from } from 'rxjs';
const routes: Routes = [{
  path: '', children: [
    { path: 'home', component: HomeComponent },
    { path: 'user', redirectTo: '/user', pathMatch: 'full' },
    { path: 'member', loadChildren: './member/member.module#MemberModule'},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ]
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
