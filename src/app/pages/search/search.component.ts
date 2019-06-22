import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/article";
import { ActivatedRoute } from "@angular/router";
import { ArticleService } from "src/app/services/article.service";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  page: number = 1;
  articles: Article[] = [];
  totalCount: number;
  pageSize: number = 2;
  loadingItem: number = 5;
  ajax;
  searchText: string;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.route.url.subscribe(params => {
      if (this.ajax != null) this.ajax.unsubscribe();

      this.articles = [];
      this.totalCount = 0;
      this.articleService.loading = true;

      if (this.route.snapshot.paramMap.get("page")) {
        this.page = Number(this.route.snapshot.paramMap.get("page"));
      }

      this.searchText = this.route.snapshot.queryParamMap.get("s");

      this.ajax = this.articleService
        .getSearchArticles(this.searchText, this.page, this.pageSize)
        .subscribe(data => {
          this.articles = data.articles;
          this.totalCount = data.totalCount;
        });
    });
  }
}
