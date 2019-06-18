import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { ContactComponent } from "./contact/contact.component";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component";
import { MainNavComponent } from './nav/main-nav/main-nav.component';
import { AdminNavComponent } from './nav/admin-nav/admin-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    MainLayoutComponent,
    AdminLayoutComponent,
    MainNavComponent,
    AdminNavComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
