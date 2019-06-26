import { Component, OnInit, ViewChild } from "@angular/core";
import { DataSource } from "@angular/cdk/table";
import { Article } from "src/app/models/article";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { ArticleService } from "src/app/services/article.service";

@Component({
  selector: "app-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.css"]
})
export class ArticleListComponent implements OnInit {
  displayedColumns: string[] = [
    "picture",
    "title",
    "category",
    "commentCount",
    "viewCount",
    "publishDate",
    "action"
  ];
  dataSource;
  articles: Article[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticlesWithoutPg().subscribe(data => {
      this.articles = data;
      this.dataSource = new MatTableDataSource<Article>(data);

      this.dataSource.paginator = this.paginator;
    });
  }

  deleteArticle(id) {
    this.articleService.deleteArticle(id).subscribe(data => {
      let article = this.articles.filter(x => x.id == id)[0];
      let index = this.articles.indexOf(article);

      this.articles.splice(index, 1);
      this.dataSource = new MatTableDataSource<Article>(this.articles);

      this.dataSource.paginator = this.paginator;
    });
  }
}
