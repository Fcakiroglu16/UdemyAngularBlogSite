import { Component, OnInit, Input } from "@angular/core";
import { Article } from "src/app/models/article";
import { Router, ActivatedRoute } from "@angular/router";
import { ArticleService } from "src/app/services/article.service";
@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.css"]
})
export class ArticlesComponent implements OnInit {
  @Input() totalCount: number;
  @Input() articles: Article[];
  @Input() page: number;
  @Input() pageSize: number;
  @Input() loadingItem: number;
  @Input() typeList: string;
  default_article: string = "assets/article_empty.jpg";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  createRange() {
    var items: number[] = [];
    for (var i = 1; i <= this.loadingItem; i++) {
      items.push(i);
    }
    return items;
  }

  ngOnInit() {
    this.articleService.loading = true;
  }

  pageChanged(event) {
    this.articleService.loading = true;
    this.page = event;
    switch (this.typeList) {
      case "home":
        this.router.navigateByUrl(`/sayfa/${this.page}`);
        break;
      case "category":
        let categoryName = this.route.snapshot.paramMap.get("name");
        let categoryId = this.route.snapshot.paramMap.get("id");

        this.router.navigateByUrl(
          `/kategori/${categoryName}/${categoryId}/sayfa/${this.page}`
        );

        break;

      case "search":
        let searchText = this.route.snapshot.queryParamMap.get("s");
        this.router.navigateByUrl(`/arama/sayfa/${this.page}?s=${searchText}`);

        break;

      default:
        break;
    }
  }
}
