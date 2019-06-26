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
import * as DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
@Component({
  selector: "app-article-update",
  templateUrl: "./article-update.component.html",
  styleUrls: ["./article-update.component.css"]
})
export class ArticleUpdateComponent implements OnInit {
  public Editor = DecoupledEditor;
  public onReady(editor) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
  }

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
    this.getCategory();
    this.articleId = Number(this.route.snapshot.paramMap.get("id"));

    this.articleService.getArticle(this.articleId).subscribe(data => {
      this.picture = data.picture;

      this.getControls.title.setValue(data.title);
      this.getControls.contentSummary.setValue(data.contentSummary);
      this.getControls.contentMain.setValue(data.contentMain);
      this.getControls.category.setValue(data.category);
    });

    this.articleForm = new FormGroup({
      title: new FormControl("", Validators.required),
      contentSummary: new FormControl("", Validators.required),
      contentMain: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required),
      picture: new FormControl("")
    });
  }
  displayCategoryName(category) {
    return category.name;
  }
  getCategory() {
    this.categoryService.getCategories().subscribe(result => {
      this.categories = result;
    });
  }
  get getControls() {
    return this.articleForm.controls;
  }

  onSubmit() {
    if (this.articleForm.valid) {
      this.loading = true;
      this.articleService
        .updateArticle(this.articleId, this.articleForm.value)
        .subscribe(
          data => {
            this.success = true;
            // alert("geldi");
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
