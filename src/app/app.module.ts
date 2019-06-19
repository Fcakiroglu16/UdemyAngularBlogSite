import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { MainModule } from "./pages/main.module";

import { AppComponent } from "./app.component";

import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component";
import { AdminNavComponent } from "./nav/admin-nav/admin-nav.component";

@NgModule({
  declarations: [AppComponent, AdminLayoutComponent, AdminNavComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MainModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
