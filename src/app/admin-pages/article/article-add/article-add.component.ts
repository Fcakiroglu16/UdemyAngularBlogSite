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
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.getCategory();

    this.articleForm = new FormGroup({
      title: new FormControl("makale 1", Validators.required),
      contentSummary: new FormControl("makale özet 1", Validators.required),
      content: new FormControl(""),
      category: new FormControl("", Validators.required),
      picture: new FormControl("")
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      this.loading = true;
      this.articleService.addArticle(this.articleForm.value).subscribe(
        data => {
          this.success = true;

          console.log("makale eklendi");
        },
        error => {
          this.success = false;
          this.info = "bir hata meydana geldi:" + error;
        }
      );
    }
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
