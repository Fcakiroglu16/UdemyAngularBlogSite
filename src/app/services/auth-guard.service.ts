import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  canActivate(
    route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot
  ):
    | boolean
    | import("@angular/router").UrlTree
    | import("rxjs").Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");

    return this.authService.IsAuthenticated(email, password).pipe(
      map(x => {
        if (x.status == true) {
          return true;
        } else {
          this.router.navigate(["/adminlogin"]);
          return false;
        }
      })
    );
  }

  constructor(private authService: AuthService, private router: Router) {}
}
