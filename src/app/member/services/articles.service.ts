import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { AppConfig } from '../../share';
import { Article, Response } from '../../models';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles$: BehaviorSubject<Article[]>;

  constructor(
    private appConfig: AppConfig,
    private http: HttpClient
  ) {
    this.articles$ = new BehaviorSubject([]);
    this._getArticles();
  }

  getArticlesFromServer(): Observable<Response> {
    return this.http.get<Response>(this.appConfig.apiUrl + '/articles');
  }

  _getArticles() {
    this.getArticlesFromServer()
    .subscribe(res => {
      if (res.success) {
        this.articles$.next(res.payload);
      } else {
        console.log('server side error');
      }
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('client-side error');
      } else {
        console.log('server-side error');
      }
    });
  }

  getArticles(): Observable<Article[]> {
    return this.articles$;
  }

  getArticle(artId: number): Observable<Article> {
    return this.articles$.pipe(
      map(articles => {
        return articles.filter(article => article.artId === artId)[0];
      })
    );
  }
}
