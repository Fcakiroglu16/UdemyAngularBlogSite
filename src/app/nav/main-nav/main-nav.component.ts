import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
enum MainPage {
  home = 1,
  about_me = 2,
  contact = 3
}
@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.css"]
})
export class MainNavComponent implements OnInit {
  pageActive: MainPage;
  constructor(private router: Router) {
    this.router.events.subscribe(x => {
      if (x instanceof NavigationEnd) {
        if (x.url.indexOf("anasayfa") > 0) {
          this.pageActive = MainPage.home;
        } else if (x.url.indexOf("hakkimda") > 0) {
          this.pageActive = MainPage.about_me;
        } else if (x.url.indexOf("iletisim") > 0) {
          this.pageActive = MainPage.contact;
        } else {
          this.pageActive = MainPage.home;
        }
      }
    });
  }

  ngOnInit() {}
}
