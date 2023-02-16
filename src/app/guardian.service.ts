import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from "./auth/services/auth.service";
import { Observable } from 'rxjs';



@Injectable()
export class AuthGuardian implements CanActivate, CanActivateChild{

    constructor(private router:Router, private servicio: AuthService){};

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        
        if (this.servicio.isAuthenticated()){
          return true;
        } else {
          this.router.navigate(['/']);
        }
        return false;
        
    
      }
    
      canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
       
        if (this.servicio.isAuthenticated()){
          return true;
        } else {
          this.router.navigate(['/']);
        }
        return false;
        
    
      }
   
}


