import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { ShareModule } from '../share';
import { ArticlesService } from '../member/services/articles.service';
import { from } from 'rxjs';
@NgModule({
  declarations: [ArticleListComponent, ArticleComponent],
  imports: [
    CommonModule,
    MemberRoutingModule,
    ShareModule
  ],
  providers: [ArticlesService]
})
export class MemberModule { }
