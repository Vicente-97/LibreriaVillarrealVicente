import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolGuardGuard implements CanActivate {
  constructor(private router : Router){}
  //Guardian que nos servirá para poder comprobar el rol.
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('role')!=='ADMIN'){
        this.router.navigate(['**'])
      }
      return localStorage.getItem('role')==='ADMIN';
  }
  
}