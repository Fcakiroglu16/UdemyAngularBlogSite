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
    "commentCount",
    "category",
    "publishDate",
    "viewCount"
  ];
  DataSource;
  articles: Article[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticlesWithoutPg().subscribe(data => {
      // this.articles = data;
      this.DataSource = new MatTableDataSource<Article>(data);

      this.DataSource.paginator = this.paginator;
    });
  }
}
