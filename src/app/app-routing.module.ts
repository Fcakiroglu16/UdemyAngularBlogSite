import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component";
import { HomeComponent } from "./home/home.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { ContactComponent } from "./contact/contact.component";

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
        //wwww.bıdıbıd.com/hakkimizda
        path: "hakkimizda",
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
