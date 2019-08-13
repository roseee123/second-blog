import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ArticlesService } from '../services/articles.service';
import { Article } from '../../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article$: Observable<Article>;

  constructor(
    private articleService: ArticlesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let artId = this.route.snapshot.paramMap.get('artId');
    this.article$ = this.articleService.getArticle(+artId);
  }

}
