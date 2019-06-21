import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "../app-routing.module";
import { ComponentsModule } from "../components/components.module";

import { HomeComponent } from "./home/home.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { ContactComponent } from "./contact/contact.component";
import { MainLayoutComponent } from "../layout/main-layout/main-layout.component";
import { MainNavComponent } from "../nav/main-nav/main-nav.component";
import { ArticleComponent } from './article/article.component';
import { CategoryArticlesComponent } from './category-articles/category-articles.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    MainNavComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    ArticleComponent,
    CategoryArticlesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule
  ]
})
export class MainModule {}

// component.module>main.module>app.module
