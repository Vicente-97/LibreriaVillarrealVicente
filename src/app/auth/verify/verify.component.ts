import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styles: [
  ]
})
export class VerifyComponent {

  constructor(private route: ActivatedRoute, private servicio :  AuthService, private router: Router) {}

  

  //Cuando se acceda a la ruta verificamos y hacemos aplicamos la lógica de nuestro servicio.
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code: any = params['code'] || null;
      const username: any = params['username'] || null

    this.servicio.verify(username, code).subscribe({
      next:(resp)=> {
        if(resp){
          Swal.fire({
            icon: 'success',
            title: 'Verification completed successfully',
            text: '¡Welcome to Libreria Villarreal!',
        })
          this.router.navigate(['/'])
        }
      },error:(err)=> {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something has gone wrong!',
        });
        
      },
    })
  })}





}
