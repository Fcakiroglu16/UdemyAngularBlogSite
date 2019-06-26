import { Component, OnInit } from "@angular/core";
import { ArticleService } from "src/app/services/article.service";
import {
  FormGroup,
  FormControl,
  Validator,
  AbstractControl,
  Validators
} from "@angular/forms";
import { CategoryService } from "src/app/services/category.service";
import { MyvalidationService } from "src/app/services/myvalidation.service";
import {
  Router,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from "@angular/router";
import { Category } from "src/app/models/category";
@Component({
  selector: "app-article-update",
  templateUrl: "./article-update.component.html",
  styleUrls: ["./article-update.component.css"]
})
export class ArticleUpdateComponent implements OnInit {
  fileData: File = null;
  picture: string = null;
  articleForm: FormGroup;
  success: boolean;
  loading: boolean;
  info: string;
  categories: Category[];
  articleId: number;
  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    public myvalidationService: MyvalidationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.articleId = Number(this.route.snapshot.paramMap.get("id"));

    this.articleService.getArticle(this.articleId).subscribe(data => {
      this.picture = data.picture;
    });
  }
  upload(files) {
    this.fileData = files.target.files[0];

    let formData = new FormData();

    formData.append("picture", this.fileData);

    this.articleService.saveArticlePicture(formData).subscribe(result => {
      console.log(result.path);
      this.picture = result.path;

      this.articleForm.controls.picture.setValue(this.picture);
    });
  }
}
