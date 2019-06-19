import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MenuCategoryComponent } from "./menu-category/menu-category.component";

@NgModule({
  declarations: [MenuCategoryComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuCategoryComponent]
})
export class ComponentsModule {}
