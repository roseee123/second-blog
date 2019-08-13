import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticlesService } from '../services/articles.service';
import { Article } from '../../models';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles$: Observable<Article[]>;
  constructor(
    private articleService: ArticlesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.articles$ = this.articleService.getArticles();
  }

  onClick(article: Article) {
    this.router.navigate(['/member/article', article.artId]);
  }

}
