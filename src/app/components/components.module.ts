import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";

import { MenuCategoryComponent } from "./menu-category/menu-category.component";
import { PageTitleComponent } from "./page-title/page-title.component";
import { ArticlesComponent } from "./articles/articles.component";
import { UrlformatPipe } from "../pipes/urlformat.pipe";
import { MenuArticleMostViewComponent } from "./menu-article-most-view/menu-article-most-view.component";

@NgModule({
  declarations: [
    MenuCategoryComponent,
    PageTitleComponent,
    ArticlesComponent,
    UrlformatPipe,
    MenuArticleMostViewComponent
  ],
  imports: [CommonModule, RouterModule, NgxPaginationModule],
  exports: [
    MenuCategoryComponent,
    PageTitleComponent,
    ArticlesComponent,
    UrlformatPipe,
    MenuArticleMostViewComponent
  ]
})
export class ComponentsModule {}
