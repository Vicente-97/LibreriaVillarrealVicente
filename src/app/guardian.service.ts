import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from "./auth/services/auth.service";
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';



@Injectable()
export class AuthGuardian implements CanActivate, CanActivateChild{

    constructor(private router:Router, private servicio: AuthService){};

    //Guardian que no nos dej acceder a la ruta si no está logueado.
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        
        if (this.servicio.isAuthenticated()){
          return true;
        } else {
          this.router.navigate(['/']);
          Swal.fire({
            icon: 'error',
            title: 'Oops... Login is Required',
            text: 'Sorry to be able to access our services it is essential to be logged in, you can do it in the upper right icon!',
            
          })
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


