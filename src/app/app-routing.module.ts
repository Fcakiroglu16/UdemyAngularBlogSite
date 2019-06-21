import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ArticleComponent } from "./pages/article/article.component";
import { CategoryArticlesComponent } from "./pages/category-articles/category-articles.component";

const routes: Routes = [
  {
    //wwww.bıdıbıd.com/
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "sayfa/:page",
        component: HomeComponent
      },
      {
        path: "makale/:title/:id",
        component: ArticleComponent
      },
      {
        path: "kategori/:name/:id",
        component: CategoryArticlesComponent
      },
      {
        path: "kategori/:name/:id/sayfa/:page",
        component: CategoryArticlesComponent
      },

      {
        //wwww.bıdıbıd.com/hakkimizda
        path: "hakkimda",
        component: AboutMeComponent
      },
      {
        //wwww.bıdıbıd.com/iletisim
        path: "iletisim",
        component: ContactComponent
      }
    ]
  },
  {
    //wwww.bıdıbıd.com/admin
    path: "admin",
    component: AdminLayoutComponent

    //www.bididbid.com/admin/makale/ekle
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
