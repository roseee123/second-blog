import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'article-list', component: ArticleListComponent },
      { path: 'article/:artId', component: ArticleComponent },
      { path: '', redirectTo: 'article-list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
