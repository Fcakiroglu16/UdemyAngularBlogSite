import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";
import { MaterialModule } from "../modules/material.module";
import { ComponentsModule } from "../components/components.module";

import { AdminLayoutComponent } from "../layout/admin-layout/admin-layout.component";
import { AdminNavComponent } from "../nav/admin-nav/admin-nav.component";

@NgModule({
  declarations: [AdminLayoutComponent, AdminNavComponent],
  imports: [CommonModule, AppRoutingModule, MaterialModule, ComponentsModule]
})
export class AdminModule {}
