import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Category } from 'src/app/models/category';
import { ListCommentsComponent } from 'src/app/components/list-comments/list-comments.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article;
  category: Category;
  @ViewChild(ListCommentsComponent, { static: false })
  listComponent: ListCommentsComponent;
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.articleService.loading = true;

      // www.mysite.com/makale/asp.net core'gelen yenilikler/4
      let id = Number(this.route.snapshot.paramMap.get('id'));

      this.articleService.getArticle(id).subscribe(data => {
        this.article = data;
        this.category = data.category;

        this.articleService.ArticleViewCountUp(this.article.id).subscribe();
      });
    });
  }

  ReloadCommnetList() {
    this.listComponent.reLoad();
  }
}
