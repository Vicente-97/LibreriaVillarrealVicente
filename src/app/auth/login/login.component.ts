import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Definimos nuestro formulario.
  @ViewChild('loginForm') loginForm!: NgForm

  
  //Variable para ver si esta logueado.
  isLoggedIn!: boolean;



  constructor(private router: Router, private loginService : AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isAuthenticated();
  }

  //Método para iniciar sesion.
  signIn():void{
    console.log('Username: ', this.loginForm.value.username, 'Password: ', this.loginForm.value.password)
    this.loginService.login(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe({
      next: (resp) => {
        if (resp) {
          Swal.fire({
            icon: 'success',
            title: 'Successful session start',
            text: '¡Welcome!',
          });
          this.isLoggedIn=true;
          this.router.navigate(['/']);
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Incorrect username or password.',
          });

          
        }
      }
    })
    
  }

  //método para logOut
  logOut():void{
    this.loginService.logout();
    this.isLoggedIn=false;
  }
  

  //método para comprobar las validaciones.
  nombreValido(campo:string): boolean {
    return this.loginForm?.controls[campo]?.invalid
    && this.loginForm?.controls[campo]?.touched;
  }

  passwordValida(): boolean {
    return this.loginForm?.controls['password'].invalid
    && this.loginForm?.controls['password'].touched;
  }

  onSubmit(){
    if (this.loginForm.valid) {
       return console.log("Exito");
    }else{
      
    }
  }
}
