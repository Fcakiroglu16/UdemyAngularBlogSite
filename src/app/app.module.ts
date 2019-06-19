import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { MainModule } from "./pages/main.module";

import { AppComponent } from "./app.component";

import { HomeComponent } from "./pages/home/home.component";
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { MainNavComponent } from "./nav/main-nav/main-nav.component";

import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component";
import { AdminNavComponent } from "./nav/admin-nav/admin-nav.component";

import { MenuCategoryComponent } from "./components/menu-category/menu-category.component"; ///bu  kaldırılacak.

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    MainLayoutComponent,
    AdminLayoutComponent,
    MainNavComponent,
    AdminNavComponent,
    MenuCategoryComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MainModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
