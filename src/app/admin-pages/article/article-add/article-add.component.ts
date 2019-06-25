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
import { Category } from "src/app/models/category";
import { MyvalidationService } from "src/app/services/myvalidation.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-article-add",
  templateUrl: "./article-add.component.html",
  styleUrls: ["./article-add.component.css"]
})
export class ArticleAddComponent implements OnInit {
  fileData: File = null;
  picture: string = null;
  articleForm: FormGroup;
  success: boolean;
  loading: boolean;
  info: string;
  categories: Category[];
  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    public myvalidationService: MyvalidationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCategory();

    this.articleForm = new FormGroup({
      title: new FormControl("makale 1", Validators.required),
      contentSummary: new FormControl("makale özet 1", Validators.required),
      contentMain: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required),
      picture: new FormControl("")
    });
  }

  get getControls() {
    return this.articleForm.controls;
  }
  onSubmit() {
    if (this.articleForm.valid) {
      this.loading = true;
      this.articleService.addArticle(this.articleForm.value).subscribe(
        data => {
          this.success = true;

          this.router.navigateByUrl("/admin/makale/liste");
        },
        error => {
          this.success = false;
          this.info = "bir hata meydana geldi:";
          console.log(error);
        }
      );
    }
  }

  displayCategoryName(category) {
    return category.name;
  }
  getCategory() {
    this.categoryService.getCategories().subscribe(result => {
      this.categories = result;
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
