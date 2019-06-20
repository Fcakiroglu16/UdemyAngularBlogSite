import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/article";
import { ArticleService } from "src/app/services/article.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  page: number = 1;
  articles: Article[];
  totalCount: number;
  pageSize: number = 5;
  loadingItem: number = 5;
  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get("page")) {
        this.page = Number(params.get("page"));
      }

      if (this.totalCount > 0) {
        if (this.totalCount >= this.page * this.pageSize) {
          this.loadingItem = 5;
        } else {
          this.loadingItem = this.totalCount - (this.page - 1) * this.pageSize;
        }
      }

      this.articles = [];
      this.totalCount = 0;

      this.articleService
        .getArticles(this.page, this.pageSize)
        .subscribe(data => {
          console.log(data);
          this.articles = data.articles;
          this.totalCount = data.totalCount;
        });
    });
  }
}
