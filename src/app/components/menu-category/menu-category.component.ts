import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../../services/category.service";
import { Category } from "src/app/models/category";
@Component({
  selector: "app-menu-category",
  templateUrl: "./menu-category.component.html",
  styleUrls: ["./menu-category.component.css"]
})
export class MenuCategoryComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
}
