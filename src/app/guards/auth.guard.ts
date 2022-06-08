import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("passage par le guard !!!");
    const token = localStorage.getItem('token');
    return true;

    if (token != null) {
      const decodedToken: { userId: string, iat: number, exp: number } = jwtDecode(token);
      const expirationDate = new Date(decodedToken.exp * 1000);
      const currentDate = new Date();
      if (expirationDate < currentDate) {
        // token périmé
        // 1- Supprimer mon token du localStorage
        // 2- Rediriger mon utilisateur vers /sign-in
        // 3- retourner false
        localStorage.removeItem('token');
        this.router.navigateByUrl('/sign-in');
        return false;
      } else {
        // token valide (au niveau de sa date)
        // 1- retourner true
        return true;
      }
      console.log(decodedToken);
      return true;
    } else {
      this.router.navigateByUrl('/sign-in');
      return false;
    }

  }

  }
  
}
