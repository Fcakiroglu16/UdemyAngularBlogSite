import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/article";
import { ActivatedRoute } from "@angular/router";
import { ArticleService } from "src/app/services/article.service";

@Component({
  selector: "app-archive",
  templateUrl: "./archive.component.html",
  styleUrls: ["./archive.component.css"]
})
export class ArchiveComponent implements OnInit {
  page: number = 1;
  articles: Article[] = [];
  totalCount: number;
  pageSize: number = 5;
  loadingItem: number = 5;
  ajax;
  categoryId: number;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (this.ajax != null) this.ajax.unsubscribe();

      this.articleService.loading = true;
      this.articles = [];
      this.totalCount = 0;

      if (params.get("page")) {
        this.page = Number(params.get("page"));
      }

      let year = Number(params.get("year"));
      let month = Number(params.get("month"));

      this.ajax = this.articleService
        .getArticleArchiveList(year, month, this.page, this.pageSize)
        .subscribe(data => {
          this.articles = data.articles;
          this.totalCount = data.totalCount;
        });
    });
  }
}
