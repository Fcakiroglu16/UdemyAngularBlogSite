import { Component, OnInit } from "@angular/core";
import { Archive } from "src/app/models/archive";
import { ArticleService } from "src/app/services/article.service";

@Component({
  selector: "app-menu-archive",
  templateUrl: "./menu-archive.component.html",
  styleUrls: ["./menu-archive.component.css"]
})
export class MenuArchiveComponent implements OnInit {
  archives: Archive[] = [];
  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticlesArchive().subscribe(
      data => {
        this.archives = data;
      },
      error => {
        console.log("bir hata meydana geldi:" + error);
      }
    );
  }
}
