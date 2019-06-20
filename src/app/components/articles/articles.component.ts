import { Component, OnInit, Input } from "@angular/core";
import { Article } from "src/app/models/article";
import { Router, ActivatedRoute } from "@angular/router";
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
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  pageChanged(event) {
    this.page = event;
    this.router.navigateByUrl(`/sayfa/${this.page}`);
  }
}
