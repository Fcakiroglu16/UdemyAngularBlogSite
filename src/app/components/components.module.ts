import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";

import { MenuCategoryComponent } from "./menu-category/menu-category.component";
import { PageTitleComponent } from "./page-title/page-title.component";
import { ArticlesComponent } from "./articles/articles.component";

@NgModule({
  declarations: [MenuCategoryComponent, PageTitleComponent, ArticlesComponent],
  imports: [CommonModule, RouterModule, NgxPaginationModule],
  exports: [MenuCategoryComponent, PageTitleComponent, ArticlesComponent]
})
export class ComponentsModule {}
